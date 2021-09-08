import React, { useContext } from 'react';
import ReactDOM from 'react-dom'
import { ButtonUi, CardUi } from '../UI/ProjectUi'
import Context from '../../Store/CartStore_Context'
import classes from './AddOrder.module.css';


const OrderCard = (props) => {
    const CtxData = useContext(Context);
    return (
        <section className={classes.section}>
            <CardUi class={classes.forcard}>
                <div className={`${classes.order}`}>
                    <h1 className={classes.orderhead}>Order Recipt</h1>
                    <ul className={classes.orderul}>
                        {CtxData.items.map((item) => {
                            return (
                                <li className={classes.orderlist}>
                                    <h2>{item.name}</h2>
                                    <p className={classes.orderpara}>Price: {item.price}</p>
                                    <span className={classes.orderspan}>Amount: x{item.amount}</span>

                                    <span className={classes.orderspan}>= {item.amount * item.price}$</span>

                                </li>
                            )

                        })}
                    </ul>
                </div>
                <div className={classes.order}>
                    <h2>Total Payment</h2>
                    <p className={classes.orderpara}>Total: {CtxData.totalAmount.toFixed(2)}$</p>
                    <ButtonUi class={classes.button}>Payment Method</ButtonUi>
                    <ButtonUi class={classes.button} onClick={props.onClick}>Back</ButtonUi>
                </div>
            </CardUi>
        </section>
    );
}

const OrderPortal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<OrderCard onClick={props.back}  />, document.getElementById('addOrder'))}
        </>
    )
}

export default OrderPortal;