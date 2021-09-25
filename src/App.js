import React from 'react';

import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';



import NavBar from './components/NavBar';

import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';

import Checkout from './views/Checkout/Checkout';

import ItemListConteiner from './components/ItemListContainer/ItemListConteiner';
import cart from './views/Cart/Cart.js'

import { CartProvider } from './CartContext';





const  App = () => {
  
  return (
    <CartProvider>
  
    <Router>
      <div className="App">
    
        <header className="App-header">
          <NavBar />  
        </header>

      <Switch> 
      <Route path='/' exact component={ ItemListConteiner } />
        <Route path='/category/:categoryId'  component={ ItemListConteiner } />
        <Route  path='/item/:id' component={ItemDetailConteiner}/>
       
        <Route path='/cart'  component={ cart } />
        <Route path ='/Checkout' component ={ Checkout } />
      </Switch>



       

      
      
    </div>


   </Router>

   </CartProvider>
  );
}

export default App ;
