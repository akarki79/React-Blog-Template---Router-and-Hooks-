import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Home from "./containers/Home";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./containers/About";
import Contact from "./containers/Contact";
import Posts from "./containers/Posts";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/posts/:postUrl" exact component={Posts} />
      </div>
    </Router>
  );
}

export default App;
