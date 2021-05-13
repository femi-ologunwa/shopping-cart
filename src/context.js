import React, { useReducer, createContext } from 'react';
import cartItems from './data';
import reducer from './reducer';

//create a context
const AppContext = createContext();

//initial state
const initialState = {
   loading: false,
   cart: cartItems,
   total: 0,
   amount: 0,
};

//create the context component/provider
const AppProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <AppContext.Provider
         value={{
            ...state,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
