import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ click }) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="logo">
        <h2>CHOP SHOP</h2>
      </div>
      {/* links */}
      <ul className="nav_links">
        <li>
          <Link to="/cart" className="cart_link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart
              <span className="cartlogo_badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/" className="shop_link">
            Shop
          </Link>
        </li>
      </ul>

      {/* hamburger menu */}
      <div className="hamburger_menu" onClick={click}>
        {/* <i class="fas fa-hamburger"></i> */}
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
