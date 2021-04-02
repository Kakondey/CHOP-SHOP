import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
// screens
import Home from "./screens/home/Home";
import Product from "./screens/single_product/Single_productScreen";
import Cart from "./screens/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import Backdrop from "./components/backdrop/Backdrop";
import SideDrawer from "./components/sideDrawer/SideDrawer";

// components

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      {/* SidebarDrawer */}
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      {/* backdrop */}
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/product/:id" component={Product} exact />
          <Route path="/cart" component={Cart} exact />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
