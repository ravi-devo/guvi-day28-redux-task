import { useEffect, useState } from 'react';
import './cartCard.css';
import { useDispatch } from "react-redux";
import { updateTotalValue, removeItemFromCart } from '../Store/Slices/cartSlice';

const CartCard = (props) => {

    const { product } = props;
    const [count, setCount] = useState(1);
    const [subtotal, setSubtotal] = useState(product.price);

    const dispatch = useDispatch();

    function increaseQuantity() {
        setCount((count) => count += 1);
    }

    function decreaseQuantity() {
        setCount((count) => count -= 1);
    }
    
    useEffect(() => {
        setSubtotal(() => product.price * count);
        dispatch(updateTotalValue({product, count}));
    }, [count]);

    return (
        <div className="card cartCard mb-3">
            <div className="row cartRow">
                <div className="col-lg-4">
                    <img className='imageCard img-fluid rounded-start' src={product.thumbnail} alt={product.title} />
                </div>
                <div className="col-lg-8">
                    <div className="card-body cartBody">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <div className='quantityCount'>
                            Quantity:
                            <button onClick={() => decreaseQuantity()}>-</button>
                            <span>{count}</span>
                            <button onClick={() => increaseQuantity()}>+</button>
                            <div className='cartRemove' onClick={() => dispatch(removeItemFromCart(product))}>Remove</div>
                        </div>
                        <div className="subTotal">
                            Subtotal: ${subtotal}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartCard;