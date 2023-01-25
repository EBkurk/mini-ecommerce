import React from 'react';
import { Link, Outlet } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './composants/Navbar';
import Home from './composants/front/Home';
import Cart from './composants/front/Cart';
import Order from './composants/front/Order';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { CartProvider } from './contexts/CartContext';
import {FormContextProvider} from './contexts/FormContext';

function App() {
  return (
  <CartProvider>
    <FormContextProvider>
    <Router>
      <Navbar />
      <Home />
      <Cart />
      <Order />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/order" component={Order} />
      </Routes>
    </Router>
    </FormContextProvider>
  </CartProvider>
  );
}

export default App;