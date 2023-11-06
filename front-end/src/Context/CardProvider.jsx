import { createContext, useEffect, useState } from "react";

import PropTypes from 'prop-types'

export const CartContext = createContext();


const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState(
        localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : []
    );

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItem))
    }, [cartItem]);

    const addToCart = (cartItem) => {
        setCartItem((prevCart) => [
            ...prevCart,
            {
                ...cartItem,
                quantity: cartItem.quantity ? cartItem.quantity : 1,
            }
        ]);
    }

    // const removeFromCart = (itemId) => {
    //     const filterdCartItems = cartItem.filter((cartItm) => {
    //         return cartItm.id !== itemId;
    //     })

    //    setCartItem([filterdCartItems])
    // }

    const removeFromCart = (itemId) => {
        const filteredCartItems = cartItem.filter((cartItem) => {
            return cartItem.id !== itemId;
        });
        setCartItem(filteredCartItems);
    };
    return (
        <CartContext.Provider
            value={{
                addToCart,
                removeFromCart,
                cartItem,
            }}
        >
            {children}

        </CartContext.Provider>
    )
}

export default CartProvider

CartProvider.propTypes = {
    children: PropTypes.node
}