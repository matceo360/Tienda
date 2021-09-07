import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import CartWidget from "./../CartWidget/CartWidget";
import { CartContext } from "../CartContext/CartContext";

function NavBar() {
  const { totalItemsCart } = useContext(CartContext);

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



        {totalItemsCart !== 0 ? (
          <NavLink to="/cart" className="cart-icon-md-sm text-decoration-none">
            <CartWidget />
          </NavLink>
        ) : null}

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

            <li className="nav-item dropdown">
              <p
                to="/products"
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                repuestos
              </p>
              <div
                className="dropdown-menu text-center style-dropdown"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <NavLink to="/category/producto" className="dropdown-item">
                  aceite
                </NavLink>
                <NavLink to="/category/producto" className="dropdown-item">
                  filtro de aire
                </NavLink>
                <NavLink to="/category/producto" className="dropdown-item">
                  filtro de combustible
                </NavLink>
                <NavLink to="/category/producto" className="dropdown-item">
                  filtro de aceite
                </NavLink>
              </div>
            </li>

 
          </ul>
        </div>

        {totalItemsCart !== 0 ? (
          <NavLink to="/cart" className="cart-icon-lg-xl text-decoration-none">
            <CartWidget />
          </NavLink>
        ) : null}
      </nav>
    </div>
  );
}


export default NavBar;
