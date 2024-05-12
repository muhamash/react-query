import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';

const retrieveProducts = async ( object ) =>
{
  const response = await axios.get( `http://localhost:3000/${object.queryKey[ 0 ]}/${object.queryKey[ 1 ]}` );
  
  return response.data;
};

export default function Details ( { id } )
{
  const { data: productList, error, isLoading } = useQuery( {
    queryKey: [ "products", id ],
    queryFn: retrieveProducts, 
    // retry: true,
    // staleTime: 1000,
    // refetchInterval: 3000,
  } );

  console.log( productList, error, isLoading );

  if ( isLoading ) return <div>Loading...</div>;
  if ( error ) return <div>Error: { error.message }</div>

  return (
    <div>
      <p className="text-green-800 text-center text-[40px] text-bold">Product Details</p>
    </div>
  )
}
