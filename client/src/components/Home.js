import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/bootstrap-social/bootstrap-social.css'
import '../../node_modules/jquery/dist/jquery.slim.min.js'
import '../App.css';
import '../../node_modules/popper.js/dist/umd/popper.min.js';
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import $ from 'jquery';

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
    // var navbar = document.getElementById("navbar");
    // console.log(navbar)
    // var sticky = navbar.offsetTop;
    //
    // window.onscroll = function() {this.myFunction(navbar, sticky)};


  }

  render(){
    return(
      <div>
      <nav class = "navbar navbar-dark navbar-expand-sm fixed-top">
          <div class = "container">
              <button class = "navbar-toggler" type = "button" data-toggle = "collapse" data-target = "#Navbar">
                  <span class = "navbar-toggler-icon"></span>
              </button>
              <a class = "navbar-brand" href = "#"><img src="img/ulogo.jpg" height = "30" width = "41"/></a>
              <div class = "collapse navbar-collapse" id = "Navbar">
                  <ul class = "navbar-nav mr-auto">
                      <li class = "nav-item active"><a class = "nav-link" href="#"><span class="fa fa-home fa-lg"></span> Home</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="about.html"><span class="fa fa-info fa-lg"></span> About</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="discover.html"><span class="fa fa-rocket fa-lg"></span> Discover</a></li>
                      <li class = "nav-item"><a class = "nav-link" href="browse.html"><span class="fa fa-bookmark fa-lg"></span> Browse</a></li>
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

      <div id="loginModal" class="modal fade" role = "dialog">
          <div class="modal-dialog modal-lg" role = "content">
              <div class="modal-content">
                  <div class="modal-header">
                      <h4 class="modal-title">Sign in</h4>
                      <button id = "loginClose" type = "button" class = "close">
                          &times;
                      </button>
                  </div>
                  <div class="modal-body">
                      <form>
                          <div class="form-row">
                              <div class="form-group col-sm-4">
                                      <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                      <input type="email" class="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email"/>
                              </div>
                              <div class="form-group col-sm-4">
                                  <label class="sr-only" for="exampleInputPassword3">Password</label>
                                  <input type="password" class="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"/>
                              </div>
                              <div class="col-sm-auto">
                                  <div class="form-check">
                                      <input class="form-check-input" type="checkbox"/>
                                      <label class="form-check-label"> Remember me
                                      </label>
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <button id = "newAccount" type="button" class="btn btn-success btn-sm ml-auto">New User</button>
                              <button id = "loginCancel" type="button" class="btn btn-secondary btn-sm ml-1">Cancel</button>
                              <button type="submit" class="btn btn-primary btn-sm ml-1">Sign in</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
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

      <footer class = "footer">
          <div class = "container">
              <div class = "row">
                  <div class = "col-8 offset-1">
                      <h5>Links</h5>
                      <ul class = "list-unstyled">
                          <li><a href="#">Home</a></li>
                          <li><a href="about.html">About</a></li>
                          <li><a href="discover.html">Discover</a></li>
                          <li><a href="browse.html">Browse</a></li>
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
      </div>
    )
  }
}

export default Home;
