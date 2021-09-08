import React ,{useContext} from 'react';
import Styled from 'styled-components';
import CartContext from "../../Store/CartStore_Context";

import AmountAdd from '../Meals/AmountAdd';

const Container = Styled.div`
    padding: 1.5rem 8%;
    width: 100%;
    font-size:inherit;
    line-height:1.2;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    border-bottom: 3px solid white;
    animation: meals-appear 1s ease-out forwards;
    transition:all 0.9s ease;

    &:first-child{
        border-radius: 20px 20px 0 0 ;
    }

    &:last-child{
        border-bottom:0;
        border-radius: 0 0 20px 20px;
    }

    & p,& span{
        display: block;
        margin-top:0.5rem;
        color: rgba(0,0,0,0.8);
        font-weight:bold;
        font-size:1rem;
    }

    & h3{
        font-size:1.9rem;
        color: crimson;
    }

    & li{
        list-style-type:none;
        transition:all 0.9s ease;
    }

    & .price{
        color: red;
        display: inline-block;
        font-weight:bold;
    }

    &:hover li{
        transform: scale(1.05);
        background: rgba(0,0,);
    }

    &:hover{
        background: rgba(0,0,0,0.2);
    }
    @keyframes meals-appear {
    from {
        opacity: 0;
        transform: translateY(3rem);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

    
`;

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
    {
        id: 'm5',
        name: 'Biryani',
        description: 'Spicy and Tradition of Pakistan',
        price: 50.99,
    }
    ,
    {
        id: 'm6',
        name: 'kerdhai',
        description: 'Spicy and Tradition of Pakistan',
        price: 60.99,
    }
    ,
    {
        id: 'raza',
        name: 'Baloon',
        description: 'Bloon Decoration',
        price: 10000,
    }
];

const dataId=DUMMY_MEALS.map(item=>item.id);

const AvailableMeals = (props) => {
    const cartCtx=useContext(CartContext);
    
    
    const MealsLIst = DUMMY_MEALS.map(data => {
        const addamountHandler=(amount)=>{
            cartCtx.addItems({
                id:data.id,
                name:data.name,
                amount:amount,
                price:data.price,
            });
        }
        return (
            <>
                <Container >

                    <li key={data.id} id={data.id}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <span>Price: <span className="price">{data.price.toFixed(2)}$</span></span>
                    </li>
                    <AmountAdd id={dataId} additemsHandler={addamountHandler}></AmountAdd>
                </Container>

            </>
        );
    });
    return (
        <>
            <ul>
                {MealsLIst}
            </ul>
        </>
    );
}

export default AvailableMeals;