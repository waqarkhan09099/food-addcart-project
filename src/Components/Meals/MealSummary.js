import React from 'react';
import Styled from 'styled-components';

const SummaryBox=Styled.div`
    max-width:100%;
    padding:2rem;
    background-color: rgba(0,0,0,0.4);
    font-size:inherit;
    display: flex;
    flex-direction: column;
    text-align: center;
    color:white;
    margin: 3rem auto;
    align-items: center;
    line-height: 1.2;
    box-shadow:3px 3px 10px grey;
    transition: all 0.8s ease-out;
    border: 3px solid white;
    z-index:5;
    border-radius: 15px;
    & p{
        width: 70%;
        margin-top:0.8rem;
    }
    &:hover{
        background-color: lightseagreen;
        transform: scale(1.1);
        border: 3px solid green;
    }
`;

const MealsSummery = () => {
    return ( 
        <>
            <SummaryBox>
                <h1>Dilicious Food, Delievery To You</h1>
                <p>Choose your favorite meals from our board selection of available meals and enjoy a delicious lunch or dinner at home.</p>
                <p>All our meals are cooked with high quality ingredients,just-in-time and of course by experience chefs. </p>

            </SummaryBox>
        </>
     );
}
 
export default MealsSummery;