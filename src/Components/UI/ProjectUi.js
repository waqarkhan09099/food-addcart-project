import React from 'react';
import Styled from "styled-components";
import classes from './Cart.module.css';
// import Input from './InputUi';



const Button = Styled.button`
    font-size:inherit;
    border: 2px solid crimson;
    border-radius:10px;
    transition: all 0.8s ease;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
    cursor: pointer;

    &:hover{
        border: 2px solid white;
        background-color:rgba(255,255,255,0.3);
        transform: scale(1.05);
    }
    &:active{
        transform: scale(0.95);

    }
`;

const Card = Styled.div`
    margin: 1rem auto;
    max-Width:900px;
    box-shadow:3px 3px 10px rgba(255,255,255,0.9)
    width:100%;
    border: 3px solid white;
    border-radius:20px;
    
`;

const ButtonUi = (props) => {
    return (
        <>
            <Button type={props.type || "button"} onClick={props.onClick} className={props.class}>
                {props.children}
            </Button>
        </>
    )
};

const CartUi = (props) => {
    // console.log(props)
    const price=`$${props.price}`;
    return (
        <>
            <div className={`${classes['meal']} ${props.class}`} >
                <h3>{props.name}</h3>
                <div className={classes.total}>
                    <div>
                        <p className={classes.description}>{props.description} </p>
                        <span className={classes.price}>{price}</span>
                    </div>
                    <span className={classes.count}>x{props.countItem}</span>
                    <div className={classes.total}>
                        <form className={classes.addAndMinus}>
                            <ButtonUi onClick={props.onAddAmount} class={classes.addminusbutton}>+</ButtonUi>
                            <ButtonUi onClick={props.onRemoveAmount} class={classes.addminusbutton}>-</ButtonUi>
                        </form>
                    </div>
                </div>
            </div>
            
        </>
    )
}

const CardUi = (props) => {
    return (
        <Card className={props.class}>{props.children}</Card>
    );
}

export { ButtonUi, CardUi, CartUi };