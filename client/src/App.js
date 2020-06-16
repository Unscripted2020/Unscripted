import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
<<<<<<< HEAD
import { BrowserRouter, Route } from "react-router-dom";

=======
import Browse from './components/Browse';
import Discover from './components/Discover';
import About from './components/About';
import { BrowserRouter, Route } from "react-router-dom";


>>>>>>> aaf0acf3c472674057fc9eac32ec3ee7f885640c
class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
<<<<<<< HEAD
=======
          <Route path="/about" component={About} exact/>
          <Route path="/discover" component={Discover} exact/>
          <Route path="/browse" component={Browse} exact/>
>>>>>>> aaf0acf3c472674057fc9eac32ec3ee7f885640c

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
