import logo from './logo.svg';
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/index.scss";

// Components
import Header from './Header'

// Pages
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Route exact={true} path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
