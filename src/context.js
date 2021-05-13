import React, { useState, createContext } from 'react';
import cartItems from './data';

//create a context
const AppContext = createContext();

//create the context component/provider
const AppProvider = ({ children }) => {
   const [cart, setCart] = useState(cartItems);

   return (
      <AppContext.Provider
         value={{
            cart,
         }}
      >
         {children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
