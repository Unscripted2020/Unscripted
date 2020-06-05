import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component{

  render(){
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
