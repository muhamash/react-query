import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

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
        retry: false,
        // staleTime
        refetchInterval: false
    } );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {error ? (
                <div>Error: {error.message}</div>
            ) : (
                <div>Total Products: {productList.length}</div>
            )}
        </div>
    );
}