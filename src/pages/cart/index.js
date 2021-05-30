
import React, {useContext} from 'react';
import CartTable from "./cart-table"
import {CartContext} from '../cart-provider'

function Index() {
    const {
        cartTotal,
        cartItems,
        removeFromCart,
        updateQuantity
         } = useContext(CartContext);

    return (
        <CartTable
              cartItems = {cartItems} 
              cartTotal = {cartTotal}
              removeFromCart = {removeFromCart}
              updateQuantity = {updateQuantity}
        />
    );
}

export default Index;