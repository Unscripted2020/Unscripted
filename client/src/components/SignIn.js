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

class SignIn extends React.Component{

  login(){
    const usernameInput = document.querySelector('#usernameInput');
    const passwordInput = document.querySelector('#passwordInput');
    if(usernameInput.checkValidity() && passwordInput.checkValidity()){
      fetch('login', {
              method: 'POST',
              body: `username=${usernameInput.value}&password=${passwordInput.value}`,
              headers: { 'Content-type': 'application/x-www-form-urlencoded' }
            })
          .then(res => res.json())
          .then(res => {
            console.log(res);
          })
    }
  }

  componentDidMount(){
    const loginButton = document.getElementById('loginBtn');
    console.log(loginButton);
    loginButton.addEventListener('click', this.login);
  }
  render(){
    return(
      <div id="loginModal" class="modal fade" role = "dialog">
          <div class="modal-dialog modal-lg" role = "content">
              <div class="modal-content">
                  <div class="modal-header">
                      <h4 class="modal-title" >Sign in</h4>
                      <button id = "loginClose" type = "button" class = "close">
                          &times;
                      </button>
                  </div>
                  <div class="modal-body">
                      <form>
                          <div class="form-row">
                              <div class="form-group col-sm-4">
                                <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                <input type="email" class="form-control form-control-sm mr-1" id="usernameInput" placeholder="Enter email"/>
                              </div>
                              <div class="form-group col-sm-4">
                                  <label class="sr-only" for="exampleInputPassword3">Password</label>
                                  <input type="password" class="form-control form-control-sm mr-1" id="passwordInput" placeholder="Password"/>
                              </div>
                              <div class="col-sm-auto">
                                  <div class="form-check">
                                      <input class="form-check-input" type="checkbox"/>
                                      <label class="form-check-label"> Remember me
                                      </label>
                                  </div>
                              </div>
                              <div id = "red-box" class="col-sm-8 d-none">
                                <div>
                                  <p id = "wrong-credentials">You have entered the wrong username or password</p>
                                </div>
                                  
                              </div>
                          </div>
                          <div class="form-row">
                              <button id = "newAccount" type="button" class="btn btn-success btn-sm ml-auto">New User</button>
                              <button id = "loginCancel" type="button" class="btn btn-secondary btn-sm ml-1">Cancel</button>
                              <button type="button" class="btn btn-primary btn-sm ml-1" id="loginBtn">Sign in</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}

export default SignIn;
