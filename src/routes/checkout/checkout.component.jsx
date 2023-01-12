import { useContext } from 'react';
import './checkout.styles.scss';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckOut = () => {

    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block' >
                    <span>Product</span>
                </div>
                <div className='header-block' >
                    <span>Description</span>
                </div>
                <div className='header-block' >
                    <span>Quantity</span>
                </div>
                <div className='header-block' >
                    <span>Price</span>
                </div>
                <div className='header-block' >
                    <span>Remove</span>
                </div>
                {
                    cartItems.map((cartItem) => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} ></CheckoutItem>
                    ))
                }
                <div className='total'>Total: ${cartTotal}</div>

            </div>
        </div>
    )
}

export default CheckOut;