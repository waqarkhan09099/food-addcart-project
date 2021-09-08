import React, { useContext, useState, useEffect } from 'react';
import { FaCartArrowDown } from 'react-icons/fa';
import classes from './HeaderCart.module.css';
import CartContext from '../../Store/CartStore_Context';

const HeaderCart = (props) => {
    const [bumpAnimation, setBumpaAnimation] = useState(false);
    const cartCtx = useContext(CartContext);
    const cartTotalItem = cartCtx.items.reduce((curNumber, item) => curNumber + item.amount,0);
    // const cartTotalItem=0;
    useEffect(() => {
        if (cartTotalItem === 0) {
            return;
        }
        setBumpaAnimation(true)
        const timer = setTimeout(() => {
            return setBumpaAnimation(false);
        }, 300)

        return ()=>{
            clearTimeout(timer);
        }
    }, [cartTotalItem]);
    return (
        
        <button disabled={props.disable} className={`${classes.button} ${bumpAnimation ? classes.bump : ""}`} onClick={props.addCart}>
            <span>
                <FaCartArrowDown className={`${classes.icon}`} />
            </span>
            <span>
                Your Cart
            </span>
            <span className={`${classes.badge}`}>
                {cartTotalItem}
            </span>
        </button>

    );
}

export default HeaderCart;