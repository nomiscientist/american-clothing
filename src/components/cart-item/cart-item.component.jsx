import {
    CartItemContainer,
    ItemDetails
} from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {

    const {imageUrl, price, name, quantity} = cartItem;

    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`}></img>
            <ItemDetails>
                <span>{name}</span>
                <span>
                    {quantity} x ${price}
                </span>
            </ItemDetails>
        </CartItemContainer>
    )
}

export default CartItem;