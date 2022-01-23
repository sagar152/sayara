import logo from './logo.svg';
import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style/index.scss";

// Components
import Header from './Header'

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

// import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="">
        <Route exact path="/" component={Home} />
        <Route exaxt path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
