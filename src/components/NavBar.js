import React from "react";
import { NavLink } from "react-router-dom";

import CartWidget from "./CartWidget/CartWidget";


function NavBar() {
 

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light menu-navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>



        
          <NavLink to="/cart" className="cart-icon-md-sm text-decoration-none">
            
          </NavLink>
    

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
              Inicio
              </NavLink>
            </li>
  
            <li className="nav-item">
              <NavLink to="/products" className="nav-link">
                accesorios(proximamente)
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/category/products" className="nav-link">
                Repuestos
              </NavLink>
            </li>

           
 
          </ul>
        </div>

     
          <NavLink to="/cart" className="cart-icon-lg-xl text-decoration-none">
            <CartWidget />
          </NavLink>
     
      </nav>
    </div>
  );
}


export default NavBar;
