import React, { useReducer } from 'react';
import CartContext from './CartStore_Context';

const defaultInitialData = {
    items: [],
    totalAmount: 0,
};

const reducerFunc = (state, action) => {
    if (action.type === "ADD") {
        const updateItemsNumber = state.totalAmount + action.item.price * action.item.amount;
        const updatedNumberItem = +updateItemsNumber;

        // const existingItemIndex = state.items.findIndex((items) => items.id === action.items.id);
        // const existingItem = state.items[existingItemIndex];
        // let updateItem;
        // let updateItems;
        // if (existingItem) {
        //     updateItem = {
        //         ...existingItem,
        //         amount: existingItem.amount + action.items.amount
        //     };
        //     updateItems={...state.items};
        //     updateItems[existingItemIndex]=updateItem;
        // }else{
        //     updateItem={...action.items};
        //     updateItems=state.items.concat(action.item);
        // }

        const updateItems=state.items.concat(action.item);
        return {
            items: updateItems,
            totalAmount: updatedNumberItem
        }
    }
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