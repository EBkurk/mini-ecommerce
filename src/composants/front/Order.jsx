import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FormContext } from '../../contexts/FormContext';

const Order = () => {
  const { cart } = useContext(CartContext);
  const { formData } = useContext(FormContext);

  return (
    <div>
      <h1>Bon de Commande</h1>
      <h2>Récapitulatif du panier</h2>
      {cart.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
      <h2>Informations de livraison</h2>
      <p>Nom: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Adresse: {formData.address}</p>
      <p>Commentaire: {formData.comment}</p>
    </div>
  );
};

export default Order;