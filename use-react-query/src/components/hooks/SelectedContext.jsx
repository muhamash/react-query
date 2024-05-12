import React from 'react';

const SelectedContext = React.createContext();

export const useSelectedId = () => React.useContext( SelectedContext );

export const SelectedContextProvider = ( { children } ) =>
{
    const [ selected, setSelected ] = React.useState( null );

    const handleSelection = ( id ) =>
    {
        console.log(id)
        setSelected ( id )
    }

    return (
        <SelectedContext.Provider value={ { selected, handleSelection } }>
            { children }
        </SelectedContext.Provider>
    )
};