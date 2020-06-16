import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Browse from './components/Browse';
import Discover from './components/Discover';
import About from './components/About';
import { BrowserRouter, Route } from "react-router-dom";


class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} exact/>
          <Route path="/discover" component={Discover} exact/>
          <Route path="/browse" component={Browse} exact/>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
