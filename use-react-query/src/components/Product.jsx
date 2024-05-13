import React from 'react';
import { useSelectedId } from './hooks/SelectedContext';

export default function Product ( { image, title, rating, inStock, price, onClick, id } )
{
    // console.log(inStock);
    const { handleSelection } = useSelectedId();
    // const handleCLick = ( id ) =>
    // {
    //     console.log(id)
    // }

    return (
        <div className="flex flex-col gap-5 w-[300px] bg-slate-300 p-3 rounded-md bg-opacity-50 hover:shadow-md">
            <div className="pb-3">
                <img className="w-fit mx-auto h-[200px] rounded-md" src={ image } alt="image?" />
            </div>
            <div className="flex justify-between text-sm">
                <div>
                    <p className="font-semibold text-indigo-700 pb-2">Name: { title }</p>
                    <p className="font-mono">Price: { price }tk</p>
                </div>
                <div>
                    <p className="font-thin">Rating: { rating }</p>
                    <p className={ `${inStock > 90 ? "text-green-800" : "text-yellow-600"}` }>InStock</p>
                </div>
            </div>
            <div className="flex justify-between">
                {/* <p classNames="">
                    <span className="text-md font-bold text-gray-900">Product Details:</span>   <span className="text-[12px] leading-tight  text-gray-700">{ description }</span>
                </p> */}
                <button
                    onClick={()=>handleSelection(id)}
                    className="bg-green-600 text-white rounded-md text-center px-3 py-2 w-fit cursor-pointer hover:shadow-md shadow-white">Show details
                </button>
                <button
                    onClick
                    className="bg-red-500 text-white p-3 rounded">
                    Delete
                </button>
            </div>

        </div>
    );
}
