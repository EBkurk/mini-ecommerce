import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import {useContext} from "react"
import './Home.css';


const products = [
  {
    name: "Produit 1",
    description: "Description du produit 1",
    price: "Prix: 10$",
    id: "1"
  },
  {
    name: "Produit 2",
    description: "Description du produit 2",
    price: "Prix: 15$",
    id: "2"
  },
  {
    name: "Produit 3",
    description: "Description du produit 3",
    price: "Prix: 20$",
    id: "3"
  },
  {
    name: "Produit 4",
    description: "Description du produit 4",
    price: "Prix: 25$",
    id: "4"
  },
  {
    name: "Produit 5",
    description: "Description du produit 5",
    price: "Prix: 30$",
    id: "5"
  }
];

const Home = () => {

    const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    setCart([...cart, product]);
  }

  return (
    <div className="container">
      <h1 className="text-center">Nos produits</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-sm-6 col-md-4" key={product.id}>
            <div className="my-card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-primary">Ajouter au panier</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
