import CartItem from "../../components/CartItem/CartItem";
import "./cart.css";

const Cart = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen_left">
        <h2>Shopping cart</h2>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cartscreen_right">
        <div className="cartscreen_info">
          <p>Subtotal (0) items</p>
          <p>$4545.34</p>
        </div>
        <div>
          <button>Proceed To Checkout </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
