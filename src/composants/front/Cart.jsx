import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { FormContext } from '../../contexts/FormContext';

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
    <div>
      <h1>Mon panier</h1>
      {cart.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <button onClick={() => removeFromCart(product.id)}>Supprimer</button>
        </div>
      ))}

<form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={formData.name}/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={handleChange} value={formData.email}/>
        </div>
        <div>
          <label htmlFor="address">Adresse:</label>
          <input type="text" id="address" name="address" onChange={handleChange} value={formData.address}/>
        </div>
        <div>
          <label htmlFor="comment">Commentaire:</label>
          <textarea id="comment" name="comment" onChange={handleChange} value={formData.comment}/>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};
export default Cart;