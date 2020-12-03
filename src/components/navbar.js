import React, { Component } from "react";
import "./style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faTimes } from "@fortawesome/free-solid-svg-icons";
import image from "./images/320x180.jpg";

export default class Navbar extends Component {
  state = {
    on: false,
  };

  cartWrapper = () => {
    this.setState({
      on: !this.state.on,
    });
  };
  render() {
    return (
      <>
        <header>
          <nav>
            <BrowserRouter>
              <div className="logo">
                <span>
                  <Link to="/">Tinel</Link>
                </span>

                <span>
                  <Link to="/">Workshop</Link>
                </span>
              </div>
            </BrowserRouter>
            <div className="cart" onClick={this.cartWrapper}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Cart is empty</span>

              {this.state.on && (
                <div className="opened-cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                  <span></span>
                  <span>Workshops</span>
                  <span>
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                  <img src={image} />
                </div>
              )}
            </div>
          </nav>
        </header>
      </>
    );
  }
}

/*export { cartWrapper };*/
/*export default navbar;*/
