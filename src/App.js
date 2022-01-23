import logo from './logo.svg';
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/index.scss";

// Components
import Header from './Header'

// Pages
import Home from "./Pages/Home";
import Ourofferings from "./Pages/Ourofferings";
import About from "./Pages/About";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exaxt path="/offering" component={Ourofferings} />
        <Route exact path="/about" component={About} />
      </div>
    </div>
  );
}

export default App;
