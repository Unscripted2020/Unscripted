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

class Browse extends React.Component{
  componentDidMount(){
    activateNavBar(3);
    initalize();
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
                      <h1>Browse</h1>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero consectetur saepe perspiciatis? Provident, doloremque optio dolore voluptatum recusandae dolorum animi quae explicabo, pariatur soluta aut eveniet suscipit sit! Voluptas facilis rem rerum neque repudiandae, impedit animi sint. Saepe, perspiciatis.</p>
                  </div>
              </div>
          </div>
      </header>

      <div id = "course-1" class = "row row-content align-items-center">
          <div class = "col col-sm order-sm-first col-md">
              <div class="media">
                  <div class="col-6 embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=vDqOoI-4Z6M&list=PL7AF1C14AF1B05894&index=2&t=0s" allowfullscreen></iframe>
                  </div>
                  <div class="col-6 media-body">
                      <h2 class = "mt-0">Algebra I <span class="badge badge-danger">NEW</span><button id = "course-1-close" type = "button" class = "close">&times;</button></h2>
                      <p class = "d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autem cupiditate minima non suscipit officiis qui in ea consequatur voluptas sed quam quisquam impedit facilis voluptatibus blanditiis repellendus, vitae architecto maiores dicta ullam? Incidunt, neque ex. Itaque rem odio doloribus!</p>
                  </div>
              </div>
          </div>
      </div>

      <div id = "course-2" class = "row row-content align-items-center course">
          <div class = "col col-sm col-md">
              <div class="media">
                  <div class="col-6 embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=il0EJrY64qE&list=PL26812DF9846578C3&index=3&t=0s" allowfullscreen></iframe>
                  </div>
                  <div class="col-6 media-body">
                      <h2 class = "mt-0">Geometry<button id = "course-2-close" type = "button" class = "close">&times;</button></h2>
                      <p class = "d-none d-sm-block">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, assumenda veritatis. Quia dignissimos amet labore et, debitis vero impedit tempora soluta modi a reiciendis sit porro vitae! Sequi, officia dolor fuga ducimus dolorem ab. Quibusdam dolorem ducimus eos expedita culpa.</p>
                  </div>
              </div>
          </div>
      </div>

      <div id = "course-3" class = "row row-content align-items-center course">
          <div class = "col col-sm order-sm-first col-md">
              <div class="media">
                  <div class="col-6 embed-responsive embed-responsive-16by9">
                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed?v=riXcZT2ICjA&list=PL19E79A0638C8D449&index=2" allowfullscreen></iframe>
                  </div>
                  <div class="col-6 media-body">
                      <h2 class = "mt-0">Calculus<button id = "course-3-close" type = "button" class = "close">&times;</button></h2>
                      <p class = "d-none d-sm-block">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi blanditiis repellat ducimus omnis ullam, similique dolore cupiditate? Laudantium itaque provident sit ullam, exercitationem libero omnis possimus, praesentium maiores a consectetur rem, corporis officia saepe aut beatae hic doloremque ut? Totam.</p>
                  </div>
              </div>
          </div>
      </div>

        <Footer/>
      </div>
    )
  }
}

export default Browse;
