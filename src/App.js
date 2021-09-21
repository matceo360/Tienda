import React from 'react';

import {BrowserRouter as Router,  Switch, Route } from 'react-router-dom';



import NavBar from './components/NavBar';

import ItemDetailConteiner from './components/ItemDetailConteiner/ItemDetailConteiner';



import ItemListConteiner from './components/ItemListContainer/ItemListContainer';
import cart from './Views/Cart/cart.js'

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

      </Switch>



       

      
      
    </div>


   </Router>

   </CartProvider>
  );
}

export default App ;
