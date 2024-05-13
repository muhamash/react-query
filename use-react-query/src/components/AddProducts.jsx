import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';

export default function AddProducts ()
{
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
        onSuccess: () =>
        {
            queryClient.invalidateQueries(['products'])
        }
    })
    const submit = ( event ) =>
    {
        event.preventDefault();
        console.log( state )
        const addId = { ...state, id: crypto.randomUUID().toString() };
        console.log( addId );
        mutation.mutate( addId );
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
    return (
        <div className="bg-gray-100  p-5">
            <p className="py-3 text-xl text-violet-600">Add a product</p>
            <form onSubmit={ submit }
                className="flex flex-col gap-10"
            >
                <input
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
                    name="price"
                    onChange={ handleChange }
                    value={ state.price }
                    className='p-1 rounded-md'
                    placeholder="input price"
                />
                <input
                    name="brand"
                    onChange={ handleChange }
                    value={ state.brand }
                    className='p-1 rounded-md'
                    placeholder="input brand"
                />
                <input
                    name="stock"
                    onChange={ handleChange }
                    value={ state.stock }
                    className='p-1 rounded-md'
                    placeholder="how many?"
                />
                <input
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
