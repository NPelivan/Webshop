import React, { Component } from "react";
import Navbar from "./navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaintBrush,
  faClock,
  faCalendarAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import image from "./images/320x180.jpg";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

export default class Product extends Component {
  render() {
    return (
      <>
        <main>
          <aside>
            <FontAwesomeIcon icon={faArrowLeft} />
            <Link to="/home">Natrag</Link>
          </aside>

          <section>
            <img src={image} alt="Product" />

            <FontAwesomeIcon icon={faPaintBrush} />
            <span>
              <FontAwesomeIcon icon={faCalendarAlt} />
              27.6.2020.
            </span>

            <span>
              <FontAwesomeIcon icon={faClock} /> 09:00 h
            </span>

            <h1>Ineraction Design Workshop</h1>

            <b>with</b>

            <h4>Marko Maljković</h4>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div>
              <h5>Buy Your Ticket</h5>
              <span>495,00</span>
              <span>EUR</span>

              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>

              <button>Add to Cart</button>
              <small>Subtotal: 4.950,00 HRK</small>
            </div>
          </section>
        </main>

        <section>
          <h2>Similar Workshops</h2>

          <article>
            <div className="card">
              <Link to="/product">
                <img src={image} alt="Product" />
              </Link>

              <span>
                <FontAwesomeIcon icon={faPaintBrush} />
              </span>
              <div className="card-wrapper">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 27.06.2020.{" "}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} /> 09:00h
                </span>

                <Link to="/product">
                  <h4>Interaction Design Workshop</h4>
                </Link>
                <span>495,00</span>
                <span>EUR</span>

                <button>Add to Cart</button>
                <button className="mobile-btn">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
            <div className="card">
              <Link to="/product">
                <img src={image} alt="Product" />
              </Link>

              <span>
                <FontAwesomeIcon icon={faPaintBrush} />
              </span>
              <div className="card-wrapper">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 27.06.2020.{" "}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} /> 09:00h
                </span>

                <Link to="/product">
                  <h4>Interaction Design Workshop</h4>
                </Link>
                <span>495,00</span>
                <span>EUR</span>

                <button onClick={this.addtobasket}>Add to Cart</button>
                <button className="mobile-btn">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>

            <div className="card">
              <Link to="/product">
                <img src={image} alt="Product" />
              </Link>

              <span>
                <FontAwesomeIcon icon={faPaintBrush} />
              </span>
              <div className="card-wrapper">
                <span>
                  <FontAwesomeIcon icon={faCalendarAlt} /> 27.06.2020.{" "}
                </span>
                <span>
                  <FontAwesomeIcon icon={faClock} /> 09:00h
                </span>

                <Link to="/product">
                  <h4>Interaction Design Workshop</h4>
                </Link>
                <span>495,00</span>
                <span>EUR</span>

                <button onClick={this.addtobasket}>Add to Cart</button>
                <button className="mobile-btn">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          </article>
        </section>
      </>
    );
  }
}
