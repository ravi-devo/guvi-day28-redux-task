import "./navbar.css";

const navBar = (props) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
      <a className="navbar-brand" href="https://">Shop with us</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="nav-flex collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://">Home </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://">About</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="https://" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Shop
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="https://">All products</a>
              <a className="dropdown-item" href="https://">Popular Items</a>
              <a className="dropdown-item" href="https://">New Arrivals</a>
            </div>
          </li>
        </ul>
        <div className="nav-item btn btn-primary cart-item">
          Cart
          <div className="item-count"><p>{props.cartCount}</p></div>
        </div>
      </div>
    </nav>
    </div>
    
  );
}

export default navBar;