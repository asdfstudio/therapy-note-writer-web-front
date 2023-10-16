'use client';
import { createContext, useReducer, Dispatch, useEffect } from 'react';
import Reducer from './Reducer';

let INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false,
    dispatch: (() => undefined) as Dispatch<any>,
};

if (typeof window !== 'undefined') {
    INITIAL_STATE = {
        user: JSON.parse(localStorage.getItem('user')!) || null,
        isFetching: false,
        error: false,
        dispatch: (() => undefined) as Dispatch<any>,
    };
}

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Context.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >
            {children}
        </Context.Provider>
    );
};
