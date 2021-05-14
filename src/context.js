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

   //function to remove an item from cart
   const remove = (id) => {
      dispatch({ type: 'REMOVE', payload: id });
   };

   //function to increase the number of a particular item in cart
   const increase = (id) => {
      dispatch({ type: 'INCREASE', payload: id });
   };

   //function to decrease the number of a particular item in cart
   const decrease = (id) => {
      dispatch({ type: 'DECREASE', payload: id });
   };

   return (
      <AppContext.Provider
         value={{
            ...state,
            clearCart,
            remove,
            increase,
            decrease,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
