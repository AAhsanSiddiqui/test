import { useContext } from 'react';

const cartCtx = useContext(CartContext)


const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
  
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
      return curNumber + item.amount;
    }, 0);
  
    return (
      <button className={classes.button} onClick={props.onClick}>
         <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    );
  };
  
  export default HeaderCartButton;