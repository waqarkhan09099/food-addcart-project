import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import CartContext from "../../Store/CartStore_Context"
import classes from './Model.module.css';
import { CardUi, CartUi, ButtonUi } from '../UI/ProjectUi';
import style from '../UI/Cart.module.css';

const BackDrop = (props) => {
    return (
        <section onClick={props.onClose} className={classes.backdrop}>
            {props.children}
        </section>
    );
}
const PopUp = (props) => {
    const CartCtx = useContext(CartContext);
    const totalAmount = CartCtx.totalAmount.toFixed(2);
    const hasContext=CartCtx.items.length===0;

    const addamountHandler=()=>{

        console.log('click it!!')
        // console.log(id);
        const existingIndex=Math.abs(CartCtx.items.findIndex(data=>data.id));
        console.log(existingIndex)
        const existingItem=CartCtx.items[existingIndex];
        console.log(existingItem)
        let updateItem;
        if(existingItem){
            updateItem = {
                        ...existingItem,
                        amount: existingItem.amount + 1
                    }
            CartCtx.addItems[existingItem]=updateItem
            
        }
    };

    const removeAmountHandler=(id)=>{
      return   
    }
    return (
        <CardUi class={classes.modal}>
            <div className={`${CartCtx.items.length>0?classes.overflow:''}`}>
                {CartCtx.items.map(data => {
                    return (
                        <CartUi name={data.name} key={data.id} id={data.id}  countItem={data.amount} description={data.description} price={`${data.price}$`} onAddAmount={addamountHandler}
                        onRemoveAmount={removeAmountHandler} />
                    )

                })}
            </div>
            <div className={classes.total}>
                <h1>Total Amount:</h1>
                <h2>{`$${totalAmount}`}</h2>
            </div>
            <div className={style.actions}>
                <ButtonUi onClick={props.onClose} class={style['button--alt']} >Close</ButtonUi>
                {!hasContext&&<ButtonUi onClick={props.onOpen}>Order</ButtonUi>}
            </div>
        </CardUi>
    );
}


const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose}></BackDrop>, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<PopUp onOpen={props.onOpen} onClose={props.onClose} />, document.getElementById('backdrop'))}
        </>
    );
}

export default Modal;