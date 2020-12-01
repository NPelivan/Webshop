import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar>
            <Route path="/webshop/" component={Navbar} />
          </Navbar>
          <Main>
            <Route path="/webshop/" component={Main} />
          </Main>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
