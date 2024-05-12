import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import React from 'react';
import Trailer from "./Trailer";
import { useSelectedId } from "./hooks/SelectedContext";

const retrieveProducts = async ( object ) =>
{
  const response = await axios.get( `http://localhost:3000/${object.queryKey[ 0 ]}/${object.queryKey[ 1 ]}` );
  
  return response.data;
};

export default function Details (  )
{
  const { selected } = useSelectedId();

  const { data: productList, error, isLoading } = useQuery( {
    queryKey: [ "products", selected ],
    queryFn: retrieveProducts, 
    // retry: true,
    staleTime: 1000,
    // refetchInterval: 3000,
  } );

  console.log( error, isLoading );

  const rendered = React.useMemo( () =>
  {
    if ( isLoading )
    {
      return <div className="text-red-700">Loading...</div>;
    }
    
    if ( !selected )
    {
      return <div className="text-blue-800">Please select a product to view details.</div>;
    }

    if ( error )
    {
      return <div className="text-blue-800">Error: { error.message }</div>;
    }
    
    return <Trailer description={ productList.description } />;
  }, [ isLoading, error, selected, productList ] );

  // if ( isLoading ) return <div className="text-red-700">Loading...</div>;
  // if ( error ) return <div className="text-blue-800">You have select product to watch details!</div>

  return (
    <div classNames="flex flex-row gap-10">
      <p className="text-green-800 text-center text-[40px] text-bold">Show Details:</p>
      <p>{ rendered }</p>
      {/* {
        productList ? (
          <div>
            <Trailer description={productList.description}/>
          </div>
            ):(
            <div>click that [ button ] to show product details</div>
        )
      } */}
    </div>
  );
}
