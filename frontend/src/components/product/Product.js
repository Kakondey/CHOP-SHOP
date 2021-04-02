import "./product.css";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img
        src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
        alt="name"
      />
      <div className="product_info">
        <p className="info_name">Product 1</p>
        <p className="info_description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex rem
          voluptates quia ducimus doloribus earum at adipisci, quasi placeat
          ipsum soluta quod praesentium asperiores, impedit veniam veritatis
          quaerat est accusantium.
        </p>
        <p className="info_price">Price: 3456$</p>
        <Link to={`/product/${345456}`} className="info_button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
