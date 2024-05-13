import React from 'react';

export default function AddProducts ()
{
    const [ state, setState ] = React.useState( {
        title: "",
        price: "",
        rating: "",
        brand: "",
        stock: "",
        description: "",
    } );
    const submit = ( event ) =>
    {
        console.log('form', event)
        event.preventDefault();
    }

    const handleChange = (event) =>
    {
        const name = event.target.value
        console.log(name)
    }
    return (
        <div className="bg-gray-100  p-5">
            <p className="py-3 text-xl text-violet-600">Add a product</p>
            <div>
                <form onSubmit={ submit }
                    className="flex flex-col gap-10"
                >
                    <input
                        name="title"
                        onChange={handleChange}
                        value={ state.title }
                        className='p-1 rounded-md'
                        placeHolder="input title"
                    />
                    <input
                        name="rating"
                        onChange={handleChange}
                        value={ state.rating }
                        className='p-1 rounded-md'
                        placeHolder="input ratings"
                    />
                    <input
                        name="price"
                        onChange={handleChange}
                        value={ state.price }
                        className='p-1 rounded-md'
                        placeHolder="input price"
                    />
                    <input
                        name="brand"
                        onChange={handleChange}
                        value={ state.brand }
                        className='p-1 rounded-md'
                        placeHolder="input brand"
                    />
                    <input
                        name="stock"
                        onChange={handleChange}
                        value={ state.stock }
                        className='p-1 rounded-md'
                        placeHolder="how many?"
                    />
                    <input
                        name="description"
                        onChange={handleChange}
                        value={ state.description }
                        className='p-5 rounded-md'
                        placeHolder="description"
                    />

                    <button
                        type="submit"
                        className="p-3 bg-emerald-700 rounded-md hover:shadow-sm hover:bg-green-800 text-white"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
}
