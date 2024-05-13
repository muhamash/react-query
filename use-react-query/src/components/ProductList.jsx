import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Product from './Product';

const retrieveProducts = async ( object ) =>
{
    const response = await axios.get( `http://localhost:3000/products?_page=${object.queryKey[1].page}&_per_page=2` );
    console.log( "product", response, "and object", object.queryKey )

    return response.data;
};

export default function ProductList ()
{
    const [ page, setPage ] = React.useState( 1 );
    const { data: productList, error, isLoading } = useQuery( {
        queryKey: [ "products", {page}],
        queryFn: retrieveProducts,
        // retry: true,
        // staleTime: 1000, 
        // refetchInterval: 3000,
    } );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            { error ? (
                <div>Error: { error.message }</div>
            ) : (
                <div>
                    <p className="text-green-800 text-center text-[30px] text-bold pb-5">Total Products: { productList.length }</p>
                    <div className="flex flex-wrap gap-10 justify-center items-center">
                        {
                            productList.data && productList.data.map( ( product ) => (
                                <div key={ product.id }>
                                    <Product image={ product.thumbnail }
                                        title={ product.title }
                                        price={ product.price }
                                        rating={ product.rating }
                                        inStock={ product.stock }
                                        id={product.id}
                                    />
                                </div>
                            ) )
                        }
                        </div>
                        <div className="flex items-center justify-center py-10">
                            {
                                productList.prev && (
                                    <button
                                        className="bg-slate-500 text-white px-4 py-1 rounded-md"
                                        onClick={()=>setPage(productList.prev)}
                                    >
                                        Prev
                                    </button>
                                )
                            }
                            {
                                productList.next && (
                                    <button
                                        className="bg-slate-200 px-4 py-1 rounded-md"
                                    onClick={()=>setPage(productList.next)}
                                    >
                                        Next
                                    </button>
                                )
                            }
                        </div>
                </div>
            ) }
        </div>
    );
}