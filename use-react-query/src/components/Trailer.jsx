import React from 'react';

export default function Trailer({description}) {
    return (
        <div className="flex flex-col gap-5 w-[300px] bg-slate-300 p-3 rounded-md bg-opacity-50 hover:shadow-md">
            <div className="flex flex-col gap-3">
                <div className="">
                    <span className="text-md font-bold text-gray-900">Product Details:</span>   <span className="text-[12px] leading-tight  text-gray-700">{ description }</span>
                </div>
                <p className="bg-green-600 text-white rounded-md text-center px-3 py-2 w-fit cursor-pointer hover:shadow-md shadow-white">that's it!</p>
            </div>
        </div>
    );
}
