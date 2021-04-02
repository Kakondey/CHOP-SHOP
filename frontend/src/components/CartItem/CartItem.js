import "./cartitem.css";
import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem_image">
        <img
          src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
          alt="name"
        />
      </div>
      <Link to={`/product/${234}`} className="cartitem__name">
        <p>Product 1</p>
      </Link>
      <p className="cartitem_price">
        <b>Price:</b> $345
      </p>
      <select className="cartitem_select">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button className="cartitem_deleteBtn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
