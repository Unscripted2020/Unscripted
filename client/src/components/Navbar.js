import React from 'react';
//css libs
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css'
//css
import '../App.css';

class NavBar extends React.Component{
  render(){
    return(
      <nav class = "navbar navbar-dark navbar-expand-sm fixed-top">
          <div class = "container">
              <button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#Navbar">
                  <span class = "navbar-toggler-icon"></span>
              </button>
              <a class = "navbar-brand" href = "#"><img src="img/ulogo.jpg" height = "30" width = "41"/></a>
              <div class = "collapse navbar-collapse" id = "Navbar">
                  <ul class = "navbar-nav mr-auto">
                      <li class = "nav-item"><a class = "nav-link" href="/"><span class="fa fa-home fa-lg"></span> Home</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="/about"><span class="fa fa-info fa-lg"></span> Creator</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="/discover"><span class="fa fa-rocket fa-lg"></span> Discover</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="/browse"><span class="fa fa-bookmark fa-lg"></span> Browse</a></li>
                  </ul>
                  <form id = "searchBar" class="form-inline ml-auto">
                      <div class="md-form my-0">
                          <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
                          <a href = "browse.html"><i class="fa fa-search text-white ml-2" type = "button" href = "browse.html" aria-hidden="true"></i></a>
                      </div>
                  </form>
                  <span class="navbar-text">
                      <a id = "loginButton">
                          <span class="fa fa-sign-in"></span> Sign in
                      </a>
                  </span>
              </div>
          </div>
      </nav>
    )
  }
}

export default NavBar;
