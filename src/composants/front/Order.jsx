import React, { useContext } from 'react';
import './Order.css';
import { CartContext} from '../../contexts/CartContext';
import { FormContext} from '../../contexts/FormContext';

const Order = () => {
  const { cart } = useContext(CartContext);
  const { formData } = useContext(FormContext);

  return (
    <div className="order-container">
      <h1>Bon de Commande</h1>
      <div className="order-item">
        <h3>Informations client</h3>
        <p>
          <span>Nom : </span>
          {formData.name}
        </p>
        <p>
          <span>Email : </span>
          {formData.email}
        </p>
        <p>
          <span>Adresse : </span>
          {formData.address}
        </p>
        <p>
          <span>Commentaire : </span>
          {formData.comment}
        </p>
      </div>
      <div className="order-item">
        <h3>Récapitulatif de la commande</h3>
        {cart.map(product => (
          <p key={product.id}>
            {product.name} - {product.price}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Order;