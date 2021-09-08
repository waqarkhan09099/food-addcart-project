import React from 'react';

const CartContext=React.createContext({
    items:[],
    totalAmount:'0',
    addItems:(item)=>{},
    removeItmes:(id)=>{}
});

export default CartContext;