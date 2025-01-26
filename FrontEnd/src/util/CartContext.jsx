import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
        // Vérifie si le produit est déjà dans le panier
        const existingProduct = prevCart.find((item) => item.id === product.id);

        if (existingProduct) {
        // Si le produit existe, on incrémente sa quantité
        return prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        } else {
        // Si le produit n'existe pas, on l'ajoute avec une quantité de 1
        return [...prevCart, { ...product, quantity: 1 }];
        }
    });
    };
    const decreaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0) // Supprime seulement si la quantité est tombée à 0
  );
};

    const increaseQuantity = (id) => {
  setCart((prevCart) =>
    prevCart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
    };
    const clearCart = () => {
    setCart([]); // Réinitialise le panier à un tableau vide
};
    const checkOutAlert = () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
  } else {
    alert("This site is only a prototype. You cannot place real orders, thank you for your support.");
  }
};
    return (
      
    <CartContext.Provider value={{ cart, setCart, addToCart, decreaseQuantity, increaseQuantity, clearCart, checkOutAlert }}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
    children: PropTypes.node
  };