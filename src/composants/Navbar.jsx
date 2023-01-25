import React from 'react';
import { NavLink , useNavigate } from "react-router-dom"
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light my-navbar">
      <NavLink to="/" className="navbar-brand">Ma boutique</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">Accueil</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cart" className="nav-link">Panier</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/order" className="nav-link">Bon de Commande</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;