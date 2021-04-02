import "./productscreen.css";

const single_productScreen = () => {
  return (
    <div className="productscreen">
      <div className="productscreen_left">
        <div className="left_image">
          <img
            src="https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg"
            alt="product name"
          />

          <div className="left_info">
            <p className="left_name">T shirt</p>
            <p className="left_price">
              <b> Price:</b> 345$
            </p>
            <p className="left_description">
              <b> Description:</b> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam possimus perspiciatis velit, ut maxime
              explicabo suscipit sit! Minus nesciunt ullam quisquam nemo, culpa
              dolores at dolorem maxime itaque nostrum sapiente.
            </p>
          </div>
        </div>
      </div>
      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Price : <span>$235</span>
          </p>
          <p>
            Status : <span>In Stock</span>
          </p>
          <p>
            Quantity
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </p>
          <p>
            <button>Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default single_productScreen;
