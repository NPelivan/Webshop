import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Product from "./components/product";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./components/style.css";

const main = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

const product = () => {
  return (
    <div>
      <Product />
    </div>
  );
};

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />

          <Switch>
            <Route path="/home" component={main} />
            <Route path="/product" exact>
              <Product />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
