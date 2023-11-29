import { useContext, useEffect, useState } from 'react';
import './cartCard.css';
import { AppContext } from '../../App';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity } from '../Store/Slices/quantitySlice';

const CartCard = (props) => {

    const { removeFromCart, updateSubtotal } = useContext(AppContext);
    const { product } = props;
    // const [count, setCount] = useState(1);
    const [subtotal, setSubtotal] = useState(product.price);

    const dispatch = useDispatch();
    const quantityValue = useSelector((store) => store.count);

    // function increaseQuantity() {
    //     setCount((count) => count += 1);
    // }

    // function decreaseQuantity() {
    //     setCount((count) => count -= 1);
    // }


    const removingItemFromCart = (item) => {
        removeFromCart(item);
    };

    useEffect(() => {
        setSubtotal((subtotal) => product.price * quantityValue.count);
        updateSubtotal(product, quantityValue.count);
    }, [quantityValue.count]);

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
                            <button onClick={() => dispatch(decreaseQuantity())}>-</button>
                            <span>{quantityValue.count}</span>
                            <button onClick={() => dispatch(increaseQuantity())}>+</button>
                            <div className='cartRemove' onClick={() => removingItemFromCart(product)}>Remove</div>
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