import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import {
    Arrow,
    BaseSpan,
    CheckOutItemContainer,
    ImageContainer,
    Quantity,
    RemoveButton,
    Value
} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {

    const {name, imageUrl, price, quantity} = cartItem;

    const { 
        removeItemFromCart, 
        clearItemFromCart,
        addItemToCart
    } = useContext(CartContext);

    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemFromCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <CheckOutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <BaseSpan>{quantity}</BaseSpan>
                <Arrow onClick={addItemHandler} >
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckOutItemContainer>
    )
}

export default CheckoutItem;