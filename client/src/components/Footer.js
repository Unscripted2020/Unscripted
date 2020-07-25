import React from 'react';
//css libs
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css'
//css
import '../App.css';
//js
import '../../node_modules/jquery/dist/jquery.slim.min.js'
import '../../node_modules/popper.js/dist/umd/popper.min.js';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from 'jquery';

class Footer extends React.Component{
  render(){
    return(
      <footer class = "footer">
          <div class = "container">
              <div class = "row">
                  <div class = "col-8 offset-1">
                      <h5>Links</h5>
                      <ul class = "list-unstyled">
                          <li><a href="/">Home</a></li>
                          <li><a href="/about">About</a></li>
                          <li><a href="/discover">Discover</a></li>
                          <li><a href="/browse">Browse</a></li>
                      </ul>
                  </div>
                  <div class = "col-3 align-self-center">
                      <div class = "text-center">
                          <a class = "btn btn-social-icon btn-google" href="http://google.com/+"><i class="fa fa-google-plus fa-lg"></i></a>
                          <a class = "btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i class="fa fa-facebook fa-lg"></i></a>
                          <a class = "btn btn-social-icon btn-twitter" href="http://www.linkedin.com/in/"><i class="fa fa-linkedin fa-lg"></i></a>
                          <a class = "btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter fa-lg"></i></a>
                          <a class = "btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube fa-lg"></i></a>
                          <a class = "btn btn-social-icon" href="mailto:"><i class="fa fa-envelope fa-lg"></i></a>
                      </div>
                  </div>
             </div>
             <div class = "row justify-content-center">
                  <div class = "col-auto">
                      <p>© Unscripted</p>
                  </div>
             </div>
          </div>
      </footer>
    )
  }
}
export default Footer;
