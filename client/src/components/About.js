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

class About extends React.Component{
  activateNavBar(index){
    const navItems = document.getElementsByClassName('nav-item');
    const link = navItems[index].children[0];
    link.classList.add('active');
  }
  componentDidMount(){
    this.activateNavBar(1);
    let courses = [0, 1, 2];

    $(document).ready(function(){
        $("#loginButton").click(function(){
            $("#loginModal").modal('show');
        });
        $("#loginClose").click(function(){
            $("#loginModal").modal('hide');
        });
        $("#loginCancel").click(function(){
            $("#loginModal").modal('hide');
        });
        $("#formButton").click(function(){
            $("#formModal").modal('show');
        });
        $("#formClose").click(function(){
            $("#formModal").modal('hide');
        });
        $("#formCancel").click(function(){
            $("#formModal").modal('hide');
        });
        $("#course-1-close").click(function(){
            $("#course-1").addClass('d-none');
        });
        $("#course-2-close").click(function(){
            $("#course-2").addClass('d-none');
        });
        $("#course-3-close").click(function(){
            $("#course-3").addClass('d-none');
        });
        $("#search-button").click(function(){

        });
        $("#mycarousel").carousel({interval: 2000});
        $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else {
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');
            }
        });
    });
  }
  render(){
    return(
      <div>
      <NavBar/>

      <SignIn/>

      <header class = "jumbotron">
          <div class = "container">
              <div class = "row row-header">
                  <div class = "col-12">
                      <h1>About</h1>
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

export default About;
