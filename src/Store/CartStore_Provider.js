import React, { useReducer } from 'react';
import CartContext from './CartStore_Context';

const defaultInitialData = {
    items: [],
    totalAmount: 0,
};

const reducerFunc = (state, action) => {
    console.log(action.item.amount)
    console.log(state.items)
    if (action.type === "ADD") {
        const updateItemsNumber = state.totalAmount + action.item.price * action.item.amount;
        const updatedNumberItem = +updateItemsNumber;

        const existingItemIndex = state.items.findIndex((items) => items.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        console.log(existingItem)
        let updateItem;
        let updateItems;
        if (existingItem) {
            updateItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updateItems=[...state.items];
            console.log(updateItems)
            updateItems[existingItemIndex]=updateItem;
        }
        // else{
        //     updateItem=[...action.item];
        //     updateItems=state.items.concat(action.item);
        // }
        updateItems=state.items.concat(action.item);
        return {
            items: updateItems,
            totalAmount: updatedNumberItem
        }
    }
    // if(action.type==="Remove"){
    //     const decrementItem=action.id
    //     const updateRemoveItems=state.amount - action.item * action.price 
    // }
    return defaultInitialData;
}
const ContextProvider = (props) => {


    const [cartState, dispatchcartData] = useReducer(reducerFunc, defaultInitialData);

    const itemAddHandler = (item) => {
        dispatchcartData({ type: "ADD", item: item });
    }
    const itemRemoveHandler = (id) => {
        dispatchcartData({ type: "REMOVE", id: id });
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItems: itemAddHandler,
        removeItmes: itemRemoveHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );

}

export default ContextProvider;