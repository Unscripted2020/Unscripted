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
  render(){
    return(
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
    )
  }
}

export default SignIn;
