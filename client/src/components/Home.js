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
//helper functions
import { activateNavBar, initalize} from '../helperFunctions.js';

class Home extends React.Component{
  // myFunction(navbar, sticky) {
  //   var sticky = navbar.offsetTop;
  //
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   } else {
  //     navbar.classList.remove("sticky");
  //   }
  // }
  componentDidMount(){
    activateNavBar(0);
    initalize();
    // var navbar = document.getElementById("navbar");
    // console.log(navbar)
    // var sticky = navbar.offsetTop;
    //
    // window.onscroll = function() {this.myFunction(navbar, sticky)};


  }

  render(){
    return(
      <div>
      <NavBar/>
      <SignIn/>
      <header class = "jumbotron">
          <div class = "container">
              <div class = "row row-header">
                  <div class = "col-9">
                      <h1>Unscripted</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero consectetur saepe perspiciatis? Provident, doloremque optio dolore voluptatum recusandae dolorum animi quae explicabo, pariatur soluta aut eveniet suscipit sit! Voluptas facilis rem rerum neque repudiandae, impedit animi sint. Saepe, perspiciatis.</p>
                  </div>
                  <div class="col-3 align-self-center">
                      <a id = "formButton" role = "button" class = "btn btn-lg btn-block btn-warning nav-link" data-target = "#formModal">Get Started
                      </a>
                  </div>
              </div>
          </div>
      </header>

      <div class = "container">
          <div class="row row-content">
              <div class="col">
                  <div id="mycarousel" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner" role="listbox">
                          <div class="carousel-item">
                              <div class="col-12 col-md-6 embed-responsive embed-responsive-16by9 d-block">
                                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=vDqOoI-4Z6M&list=PL7AF1C14AF1B05894&index=2&t=0s" allowfullscreen></iframe>
                              </div>
                              <div class="carousel-caption d-none d-md-block">
                                  <h1>Algebra <span class="badge badge-danger">NEW</span></h1>
                              </div>
                          </div>
                          <div class="carousel-item active">
                              <div class="col-12 col-md-6 embed-responsive embed-responsive-16by9 d-block">
                                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=riXcZT2ICjA&list=PL19E79A0638C8D449&index=2" allowfullscreen></iframe>
                              </div>
                              <div class="carousel-caption d-none d-md-block">
                                  <h1>Geometry</h1>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <div class="col-12 col-md-6 embed-responsive embed-responsive-16by9 d-block">
                                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=riXcZT2ICjA&list=PL19E79A0638C8D449&index=2" allowfullscreen></iframe>
                              </div>
                              <div class="carousel-caption d-none d-md-block">
                                  <h1>Calculus</h1>
                              </div>
                          </div>
                      </div>
                      <ol class = "carousel-indicators">
                          <li data-target = "#mycarousel" data-slide-to = "0" class = "active"></li>
                          <li data-target = "#mycarousel" data-slide-to = "1"></li>
                          <li data-target = "#mycarousel" data-slide-to = "2"></li>
                      </ol>
                      <a href="#mycarousel" role = "button" data-slide = "prev" class="carousel-control-prev"><span class="carousel-control-prev-icon"></span></a>
                      <a href="#mycarousel" role = "button" data-slide = "next" class="carousel-control-next"><span class="carousel-control-next-icon"></span></a>
                      <button class="btn btn-danger btn-sm" id="carouselButton">
                          <span class="fa fa-pause"></span>
                      </button>
                  </div>
              </div>
          </div>
          <div class = "row row-content align-items-center">
              <div class = "col col-sm order-sm-first col-md">
                  <div class="media">
                      <div class="col-6 embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=vDqOoI-4Z6M&list=PL7AF1C14AF1B05894&index=2&t=0s" allowfullscreen></iframe>
                      </div>
                      <div class="col-6 media-body">
                          <h2 class = "mt-0">Algebra I <span class="badge badge-danger">NEW</span></h2>
                          <p class = "d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem cupiditate minima non suscipit officiis qui in ea consequatur voluptas sed quam quisquam impedit facilis voluptatibus blanditiis repellendus, vitae architecto maiores dicta ullam? Incidunt, neque ex. Itaque rem odio doloribus!</p>
                      </div>
                  </div>
              </div>
          </div>

          <div class = "row row-content align-items-center">
              <div class = "col col-sm col-md">
                  <div class="media">
                      <div class="col-6 media-body">
                          <h2 class = "mt-0">Geometry</h2>
                          <p class = "d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, assumenda veritatis. Quia dignissimos amet labore et, debitis vero impedit tempora soluta modi a reiciendis sit porro vitae! Sequi, officia dolor fuga ducimus dolorem ab. Quibusdam dolorem ducimus eos expedita culpa.</p>
                      </div>
                      <div class="col-6 embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=il0EJrY64qE&list=PL26812DF9846578C3&index=3&t=0s" allowfullscreen></iframe>
                      </div>
                  </div>
              </div>
          </div>

          <div class = "row row-content align-items-center">
              <div class = "col col-sm order-sm-first col-md">
                  <div class="media">
                      <div class="col-6 embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=riXcZT2ICjA&list=PL19E79A0638C8D449&index=2" allowfullscreen></iframe>
                      </div>
                      <div class="col-6 media-body">
                          <h2 class = "mt-0">Calculus</h2>
                          <p class = "d-none d-sm-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis repellat ducimus omnis ullam, similique dolore cupiditate? Laudantium itaque provident sit ullam, exercitationem libero omnis possimus, praesentium maiores a consectetur rem, corporis officia saepe aut beatae hic doloremque ut? Totam.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <Footer/>
      </div>
    )
  }
}

export default Home;
