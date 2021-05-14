import React, { useContext } from 'react';
import { AppContext } from './context';

// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';

function App() {
   //get the loading property in state through context
   const { loading } = useContext(AppContext);
   if (loading) {
      return (
         <div className='loading'>
            <h2>Loading...</h2>
         </div>
      );
   }

   return (
      <main>
         <Navbar />
         <CartContainer />
      </main>
   );
}

export default App;
