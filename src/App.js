import React, { useState } from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import classes from "./App.module.css"
import CartContexProvider from './Store/CartStore_Provider';
import Modal from './Components/Model/Model'
import OrderPortal from './Components/Model/AddOrder';

function App() {
  const [condi, setCondi] = useState(false);
  const [cardHandler, setCardHandler] = useState(false);
  const [addOrderCard, setAddOrderCard] = useState(false)
  const CardHide = () => {
    setCardHandler(false)
  }
  const CardShow = () => {
    setCardHandler(true)
    setCondi(false)
  }
  const addOrderCardHandler = () => {
    setCondi(true)
    setCardHandler(false) 
    setAddOrderCard(true)
  }
  const backHandler=()=>{
    setAddOrderCard(false)
    setCondi(false)
  }
  return (
    <CartContexProvider>

      {cardHandler && <Modal onOpen={addOrderCardHandler} onClose={CardHide} />}
      <header className={classes.main}>

      {addOrderCard&& <OrderPortal back={backHandler}/>}
        <Header addCart={CardShow} disable={condi} />
        <main className={classes.mealsSection}>
          <Meals />
        </main>
      </header>
    </CartContexProvider>
  );
}

export default App;
