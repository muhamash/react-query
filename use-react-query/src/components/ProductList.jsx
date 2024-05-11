import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import Product from './Product';

const retrieveProducts = async ( object ) =>
{
    console.log(object)
    const response = await axios.get( `http://localhost:3000/${object.queryKey[0]}` );
    console.log(response)
    return response.data;
};

export default function ProductList() {
    const { data: productList, error, isLoading } = useQuery( {
        queryKey: [ "products" ],
        queryFn: retrieveProducts,
        // retry: false,
        // staleTime
        // refetchInterval: false
    } );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            { error ? (
                <div>Error: { error.message }</div>
            ) : (
                <div>
                    <p className="text-green-800 text-center text-[40px] text-bold py-5">Total Products: { productList.length }</p>
                    <div className="flex flex-wrap gap-10">
                        {
                            productList && productList.map( ( product ) => (
                                <div key={ product.id }>
                                    <Product image={ product.images[0] }
                                        title={ product.title }
                                        price={ product.price }
                                        rating={ product.rating }
                                        inStock={product.stock}
                                    />
                                </div>
                            ) )
                        }
                    </div>
                </div>
            ) }
        </div>
    );
}