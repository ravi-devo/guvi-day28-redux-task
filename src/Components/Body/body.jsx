import "./body.css";
import Button from "../Button/button";

const body = (props) => {
    const { data, cartItems, addToCart, removeFromCart } = props;

    return (
        <main className="products">
            {data.map((e, index) => (
                <div className="product-container">
                    <div className="product-image">
                        <img src={e.url} alt="" />
                    </div>
                    <div className="product-details">
                        <h5 className="name">{e.name}</h5>
                        <p>{e.description}</p>
                        <p>{e.price}</p>
                    </div>
                    <div className="product-footer">
                        <Button e = {e} cartItems = {cartItems} addToCart = {addToCart} removeFromCart = {removeFromCart} />
                    </div>
                </div>
            ))}
        </main>
    );
}

export default body;