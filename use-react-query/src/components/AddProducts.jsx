import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';

export default function AddProducts ()
{
    const [showMessage, setShowMessage] = React.useState(false);
    const queryClient = useQueryClient();
    const [ state, setState ] = React.useState( {
        title: "",
        price:  "",
        rating: "",
        brand: "",
        stock: "",
        description: "",
        thumbnail: ""
    } );

    const mutation = useMutation( {
        mutationFn: ( newProduct ) => axios.post( `http://localhost:3000/products`, newProduct ),
        // 
        onSuccess: ( data, variables, context ) =>
        {
            console.log(context)
            queryClient.invalidateQueries( [ 'products' ] )
            setShowMessage( true );
            setTimeout( () =>
            {
                setShowMessage( false );
            }, 5000 );
        },
        onMutate: ( variables ) =>
        {
            return {greeting: 'say hello'}
        }
    } );

    const submit = ( event ) =>
    {
        event.preventDefault();
        const addId = { ...state, id: crypto.randomUUID().toString() };
        mutation.mutate( addId );
        setState( {
            title: "",
            price: "",
            rating: "",
            brand: "",
            stock: "",
            description: "",
            thumbnail: ""
        } );
        
    }

    const handleChange = (event) =>
    {
        const name = event.target.name;
        const value = event.target.type === 'number' ? event.target.valueAsNumber : event.target.value;

        setState( {
            ...state,
            [ name ]: value
        } )
        
    }

    // if (mutation.isSuccess) {
    //     setShowMessage( true );
    //     setTimeout( () =>
    //     {
    //         setShowMessage( false );
    //     }, 5000 );
    // }

    return (
        <div className="bg-gray-100  p-5">
            <p className="py-3 text-xl text-violet-600">Add a product</p>
            {
                showMessage && <p className="py-3 font-mono text-sm text-orange-500 pb-3">Product added to the list!</p>
            }
            <form onSubmit={ submit }
                className="flex flex-col gap-10"
            >
                <input
                    required
                    name="title"
                    onChange={ handleChange }
                    value={ state.title }
                    className='p-1 rounded-md'
                    placeholder="input title"
                />
                <input
                    name="rating"
                    onChange={ handleChange }
                    value={ state.rating }
                    className='p-1 rounded-md'
                    placeholder="input ratings"
                />
                <input
                    required
                    name="price"
                    onChange={ handleChange }
                    value={ state.price }
                    className='p-1 rounded-md'
                    placeholder="input price"
                />
                <input
                    required
                    name="brand"
                    onChange={ handleChange }
                    value={ state.brand }
                    className='p-1 rounded-md'
                    placeholder="input brand"
                />
                <input
                    required
                    name="stock"
                    type="number"
                    onChange={ handleChange }
                    value={ state.stock }
                    className='p-1 rounded-md'
                    placeholder="how many?"
                />
                <input
                    required
                    name="description"
                    onChange={ handleChange }
                    value={ state.description }
                    className='p-5 rounded-md'
                    placeholder="description"
                />
                <input
                    name="thumbnail"
                    onChange={ handleChange }
                    value={ state.thumbnail }
                    className='p-5 rounded-md'
                    placeholder="thumbnail"
                />

                <button
                    type="submit"
                    className="p-3 bg-emerald-700 rounded-md hover:shadow-sm hover:bg-green-800 text-white"
                >
                    Add
                </button>
            </form>
        </div>
    );
}
