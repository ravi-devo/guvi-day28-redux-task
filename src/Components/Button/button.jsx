import "./button.css";
let isButtonState = true;

const button = () => {
    function buttonPressed() {
        if (isButtonState) {
            isButtonState = false;
            const element = document.getElementById("button-state");
            element.innerHTML = "<button>RemoveCart</button>"
        } else {
            isButtonState = true;
            const element = document.getElementById("button-state");
            element.innerHTML = "<button>AddCart</button>"
        }
    }
    return (
        <div id="button-state">
            {isButtonState ? <button onClick={buttonPressed}>Add to cart</button> : <button onClick={buttonPressed}>Remove from cart</button>}
        </div>
    );
}

export default button;