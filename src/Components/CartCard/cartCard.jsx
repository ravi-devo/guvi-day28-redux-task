import { useContext, useEffect, useState } from 'react';
import './cartCard.css';
import { AppContext } from '../../App';

const CartCard = (props) => {

    const { removeFromCart, updateSubtotal } = useContext(AppContext);
    const { product } = props;
    const [count, setCount] = useState(1);
    const [subtotal, setSubtotal] = useState(product.price);

    function increaseQuantity() {
        setCount((count) => count += 1);
    }

    function decreaseQuantity() {
        setCount((count) => count -= 1);
    }

    // const updateSubtotalValue = () => {
    //     updateSubtotal(product, subtotal);
    //     console.log("product in cartCard: ", product);
    //     console.log("Subtotal in cartCard: ", subtotal);
    // }

    // function sendUpdateSubtotal(){
    //     updateSubtotal(product, count)
    // }

    const removingItemFromCart = (item) => {
        removeFromCart(item);
    };

    useEffect(() => {
        setSubtotal((subtotal) => product.price * count);
        updateSubtotal(product, count);
    }, [count]);


    // useEffect(() => {
    //     updateSubtotalValue();
        
    // }, [subtotal])

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
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{count}</span>
                            <button onClick={increaseQuantity}>+</button>
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