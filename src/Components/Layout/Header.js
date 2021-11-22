import React from 'react'
import HeaderCart from './HeaderCart';
import classes from './Header.module.css';
import Image from '../../Assets/HeaderImage.jpg';

const Header = (props) => {
    
    // const func=(e)=>{
    //     if(condition===){


    //     }
    // }
    return (
        <>
            <header className={`${classes.header} ${props.class}`}>
                <h1>
                    Meals Cart
                </h1>

                {!props.disable&&<HeaderCart addCart={props.addCart} disable={props.disable}></HeaderCart>}

            </header>
            <div className={classes.mainImage}>
                <img src={Image} alt="Dinng Table of delicious dishes" />
            </div>
        </>
    )
}

export default Header;
