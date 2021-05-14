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

   //setting up functions that will be dispatched
   const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' });
   };

   return (
      <AppContext.Provider
         value={{
            ...state,
            clearCart,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
