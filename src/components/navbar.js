import React, { Component } from "react";
import "./style.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
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
            <div className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span>Cart is empty</span>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
