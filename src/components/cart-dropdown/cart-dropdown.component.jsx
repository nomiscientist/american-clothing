import { CartContext } from "../../contexts/cart.context";

import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import {
    CartDropdownContainer,
    CartItems,
    EmptyMsg
} from './cart-dropdown.styles.jsx';

import { useContext } from "react";
import { useNavigate } from "react-router";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const checkOutHandler = () => navigate('/checkout');

    return(
        <CartDropdownContainer>
            <CartItems>
            {
                cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                    ))
                ) : (
                    <EmptyMsg > Your cart is empty </EmptyMsg>
                )
            }

            </CartItems>
            <Button onClick={checkOutHandler}>CHECKOUT</Button>
        </CartDropdownContainer>
    )   
}

export default CartDropdown;