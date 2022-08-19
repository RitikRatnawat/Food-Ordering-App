import React, {useContext, useEffect, useState} from "react";
import CartIcon from "../Cart/CartIcon"
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) =>
{
    const [isAnimated, setIsAnimated] = useState(false);
    const cartCtx = useContext(CartContext);

    const numItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);

    const { items } = cartCtx;

    const btnClasses = `${classes.button} ${isAnimated ? classes.bump : ''}`;

    useEffect(() => {
        if(items.length === 0)
        {
            return;
        }

        setIsAnimated(true);

        const timer = setTimeout(() => {
            setIsAnimated(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }
    }, [items]);

    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numItems}</span>
        </button>
    );
};

export default HeaderCartButton;

