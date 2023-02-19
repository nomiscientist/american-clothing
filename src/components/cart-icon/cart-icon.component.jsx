import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import {
    CartIconContainer,
    ItemCount,
    ShoppingIcon
} from './cart-icon.styles.jsx';

const CartIcon = () => {
    const { isCartOpen, cartCount, setIsCartOpen } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" ></ShoppingIcon>
            <ItemCount>{cartCount}</ItemCount>    
        </CartIconContainer>
    )
}

export default CartIcon;