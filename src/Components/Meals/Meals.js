import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummery from './MealSummary';
import Styled from 'styled-components'

const Container = Styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width:900px;
    border-radius: 20px ;
    margin: 10% auto 0 auto;
    z-index:5;

    /* transform: translate(-50%,0); */

    & .mealsList{
        border-radius:20px;
        background: rgba(255,255,255,0.2);
        border:3px solid white;
        margin-bottom:2rem;
        animation: meals-appear 1s ease-out forwards;
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

    

`;

const Meals = () => {
    return (
        <>
            <Container>
                <MealsSummery />
                <div className="mealsList">
                    <AvailableMeals />
                </div>
            </Container>
        </>
    );
}

export default Meals;