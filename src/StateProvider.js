//set up data layer to track cart
import React, { createContext, useContext, useReducer} from 'react';

//data layer
export const StateContext = createContext();

//provider
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//using in component
export const useStateValue = () => useContext(StateContext);