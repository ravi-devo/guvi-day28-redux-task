import "./button.css";

const button = (props) => {

    const { e, cartItems, addToCart, removeFromCart } = props;

    const addingItemToCart = (item) => {
        console.log("Adding Product: ", item);
        addToCart({ ...item, quantity: 1 });
    };

    const removingItemFromCart = (item) => {
        removeFromCart(item);
    };

    return (
        <div className="button-container">
            {cartItems.some((item) => item.id === e.id) ? (
                <div
                    className="remove-from-cart"
                    onClick={() => removingItemFromCart(e)}
                >
                    Remove from cart
                </div>
            ) : (
                <div
                    className="add-to-cart"
                    onClick={() => addingItemToCart(e)}
                >
                    Add to cart
                </div>
            )}
        </div>
    );
}

export default button;