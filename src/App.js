import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from '../src/Components/Login'
import "./style/index.scss";
import Blog from '../src/Components/Blog';
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
        <Route exact path="/blog" component={Blog} />
        {/* <Route exact path='/login' component={Login} /> */}
      </div>
    </div>
  );
}

export default App;
