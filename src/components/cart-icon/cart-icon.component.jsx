import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = () => {
    const { isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" ></ShoppingIcon>
            <span className="item-count">{cartCount}</span>    
        </div>
    )
}

export default CartIcon;