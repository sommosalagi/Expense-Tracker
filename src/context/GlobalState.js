import React, { createContext, useReducer} from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions to delete a transaction
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Actions to add a transaction
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}