import React, { useRef } from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";

const MealItemForm = (props) =>
{
    const amountInputRef = useRef();

    const submitHandler = (event) =>
    {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const amountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 || amountNumber < 1 || amountNumber > 5)
            return;
        
        props.onAddToCart(amountNumber);
    };

    return (
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_"+props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
      </form>
    );
};

export default MealItemForm;