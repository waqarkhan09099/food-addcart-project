import React ,{useRef,useState} from 'react';
import { ButtonUi } from "../UI/ProjectUi"
import classes from './AmountAdd.module.css';
import { IoIosAddCircle } from 'react-icons/io';
import Input from '../UI/InputUi'


const AmountAdd = (props) => {
    const amountinput=useRef();
    const [amountValidation, setAmountValidation] = useState(true)

    const addItemSubmitHandler=event=>{
        event.preventDefault();

        const enteredAmount=amountinput.current.value;
        const enteredAmountNumber=+enteredAmount;
        

        if(enteredAmount.trim().length===0||enteredAmountNumber<=0||enteredAmountNumber>=5){
            return setAmountValidation(false);
        }
        else{
            setAmountValidation(true)
        }
        

        props.additemsHandler(enteredAmountNumber);

    }



    return (
        <form onSubmit={addItemSubmitHandler} className={classes.amount}>
            <Input
                ref={amountinput}
                label="Amount"
                input={{
                    id:props.id,
                    type: "number", 
                    min: 0, 
                    max: 5, 
                    step: 1, 
                    defaultValue:0
                }} />
            <ButtonUi class={classes.button} type='submit'>Add Amount<IoIosAddCircle className={classes.icon} /></ButtonUi>
            {!amountValidation&&<p>plz enter Amount</p>}
        </form>
    );
}

export default AmountAdd;