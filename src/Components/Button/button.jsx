import "./button.css";
// import { AppContext } from "../../App";
// import { useContext } from "react";
import { addItemToCart, removeItemFromCart } from "../Store/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Button = (props) => {

    const { product } = props;

    // const {addToCart, removeFromCart, cartItems} = useContext(AppContext);
    const cartDataFromStore = useSelector((store) => store.cart);
    const { cartItems } = cartDataFromStore;
    const dispatch = useDispatch();

    // const addingItemToCart = (item) => {
    //     addToCart({ ...item, subtotal: item.price });
    // };

    // const removingItemFromCart = (item) => {
    //     removeFromCart(item);
    // };

    return (
        <div className="button-container">
            {cartItems.some((item) => item.id === product.id) ? (
                <div
                    className="remove-from-cart"
                    // onClick={() => removingItemFromCart(product)}
                    onClick={() => dispatch(removeItemFromCart(product))}
                >
                    Remove from cart
                </div>
            ) : (
                <div
                    className="add-to-cart"
                    // onClick={() => addingItemToCart(product)}
                    onClick={() => dispatch(addItemToCart(product))}
                >
                    Add to cart
                </div>
            )}
        </div>
    );
}

export default Button;