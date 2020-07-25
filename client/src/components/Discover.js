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
//NavBar
import NavBar from './Navbar';
//footer
import Footer from './Footer';
//sign in modal
import SignIn from './SignIn';
import SignUp from './SignUp';
//helper functions
import { activateNavBar, initalize} from '../helperFunctions.js';

class Discover extends React.Component{
  componentDidMount(){
    activateNavBar(2);
    initalize();
  }
  render(){
    return(
      <div>
      <NavBar/>
      <SignIn/>
      <SignUp/>



      <header class = "jumbotron">
          <div class = "container">
              <div class = "row row-header">
                  <div class = "col-12">
                      <h1>Discover</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero consectetur saepe perspiciatis? Provident, doloremque optio dolore voluptatum recusandae dolorum animi quae explicabo, pariatur soluta aut eveniet suscipit sit! Voluptas facilis rem rerum neque repudiandae, impedit animi sint. Saepe, perspiciatis.</p>
                  </div>
              </div>
          </div>
      </header>

      <Footer/>
      </div>
    )
  }
}

export default Discover;
