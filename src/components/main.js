import React, { Component } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  Router,
  Redirect,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faColumns,
  faChevronLeft,
  faChevronRight,
  faBolt,
  faCalendarAlt,
  faClock,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import image from "./images/320x180.jpg";
import "./style.css";
import Product from "./product";

export default class Main extends Component {
  state = {
    on: false,
  };

  showMore = () => {
    this.setState({
      on: !this.state.on,
    });
  };

  product = () => {
    return (
      <div>
        <Product />
      </div>
    );
  };

  render() {
    return (
      <>
        <main>
          <aside>
            <h6>Filter by category:</h6>
            <BrowserRouter>
              <ul>
                <li>
                  <Link to="/categories">All</Link>
                </li>

                <li>
                  <FontAwesomeIcon icon={faPaintBrush} />{" "}
                  <Link to="/categories">Design</Link>
                </li>

                <li>
                  <FontAwesomeIcon icon={faColumns} />{" "}
                  <Link to="/categories">Frontend</Link>
                </li>

                <li>
                  <FontAwesomeIcon icon={faChevronLeft} />
                  <FontAwesomeIcon icon={faChevronRight} />
                  <Link to="/categories">Backend</Link>
                </li>

                <li>
                  <FontAwesomeIcon icon={faBolt} />{" "}
                  <Link to="/categories">Marketing</Link>
                </li>
              </ul>

              <select className="mobile-side-nav">
                <option value="design">Design</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="marketing">Marketing</option>
              </select>
            </BrowserRouter>
          </aside>

          <section>
            <h2>Workshops</h2>
            <span>Displayed:</span>
            <span>13</span>

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

                  <button>Add to Cart</button>
                  <button className="mobile-btn">
                    <FontAwesomeIcon icon={faShoppingCart} />
                  </button>
                </div>
              </div>
            </article>

            <div className="show-more">
              <div className="load-btn">
                <button onClick={this.showMore}>Load more</button>
              </div>

              {this.state.on && (
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

                      <button>Add to Cart</button>
                      <button className="mobile-btn">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </section>
        </main>

        <footer>© TINEL Meetup 2020.</footer>

        <Switch>
          <Route exact path="/product" component={this.product} />
        </Switch>
      </>
    );
  }
}
