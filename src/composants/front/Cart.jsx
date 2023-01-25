import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FormContext } from '../../contexts/FormContext';
import './Cart.css';


const Cart = () => {

  const { formData, setFormData } = useContext(FormContext);
  const { cart, removeFromCart } = useContext(CartContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données du formulaire à l'API ou traitement des données
  }
  return (
    <div className="cart-container">
      
      <h1>Votre panier</h1>

<form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <input
            className="form-control"
            type="text"
            name="name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
        />
        <label>Email :</label>
        <input
            className="form-control"
            type="email"
            name="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
        />
        <label>Adresse :</label>
        <input
            className="form-control"
            type="text"
            name="address"
            value={formData.address}
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            required
        />
        <label>Commentaire :</label>
        <textarea
            className="form-control"
            name="comment"
            value={formData.comment}
            onChange={e => setFormData({ ...formData, comment: e.target.value })}
            required
            ></textarea>
            <input type="submit" value="Commander"/>
            </form>

            {cart.map(product => (
        <div className="cart-item" key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className = "cart-item">{product.price}</p>
          <button className = "cart-item button" onClick={() => removeFromCart(product.id) }>Supprimer</button>
        </div>
      ))}


    </div>





  );
};
export default Cart;