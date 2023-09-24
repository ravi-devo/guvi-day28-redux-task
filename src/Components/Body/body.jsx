import "./body.css";
import Button from "../Button/button";

const body = (props) => {
    return (
        <main className="products">
            {props.data.map((e) => (
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
                        <Button />
                    </div>
                </div>
            ))}
        </main>
    );
}

export default body;