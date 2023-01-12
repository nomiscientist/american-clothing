import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

import { useContext } from "react";

const CartDropdown = () => {

    const { cartItems } = useContext(CartContext);

    return(
        <div className="cart-dropdown-container">
            <div className="cart-items" >
            {
                cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>
                    ))
                ) : (
                    <span className="empty-message" > Your cart is empty </span>
                )
            }

            </div>
            <Button buttonType='inverted'>CHECKOUT</Button>
        </div>
    )   
}

export default CartDropdown;