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

class SignUp extends React.Component{
  render(){
    return(
        <div id="signUpModal" class="modal fade" role = "dialog">
            <div class="modal-dialog modal-lg" role = "content">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title" >Sign up</h4>
                        <button id = "signUpClose" type = "button" class = "close">
                            &times;
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class = "form-row">
                                <div class="form-group col-sm-4 offset-sm-2">
                                    <label class="sr-only">First Name</label>
                                    <input type="text" class="form-control form-control-sm mr-1" id="firstNameInput" placeholder="First Name"/>
                                    
                                </div>
                                <div class = "form-group col-sm-4">
                                    <label class="sr-only">Last Name</label>
                                    <input type="text" class="form-control form-control-sm mr-1" id="lastNameInput" placeholder="Last Name"/>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col-sm-8 offset-sm-2">
                                    <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                    <input type="email" class="form-control form-control-sm mr-1" id="usernameInput" placeholder="Enter email"/>
                                </div>
                            </div>
                            <div class = "form-row">
                                <div class="form-group col-sm-8 offset-sm-2">
                                    <label class="sr-only">Password</label>
                                    <input type="password" class="form-control form-control-sm mr-1" id="passwordInput" placeholder="Password"/>
                                </div>
                            </div>
                            <div class = "form-row">
                                <div class="form-group col-sm-8 offset-sm-2">
                                    <label class="sr-only" for="exampleInputPassword3">Retype Password</label>
                                    <input type="password" class="form-control form-control-sm mr-1" id="rePasswordInput" placeholder="Password"/>
                                </div>
                            </div>
                            <div class = "form-row">
                                <div class="col-sm-auto offset-sm-2">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox"/>
                                        <label class="form-check-label"> I would like to be added to the email list</label>
                                    </div>
                                </div>
                            </div>
                            <div id = "red-signup-box" class="col-sm-8 offset-sm-2 d-none">
                                <div>
                                  <p id = "wrong-signup-credentials">That username already exists</p>
                                </div>
                            </div>
                            <div class="form-row">
                                <button id = "alreadyUser" type="button" class="btn btn-success btn-sm ml-auto">Already a User?</button>
                                <button id = "signUpCancel" type="button" class="btn btn-secondary btn-sm ml-1">Cancel</button>
                                <button type="button" class="btn btn-primary btn-sm ml-1" id="signUpBtn">Sign up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default SignUp;
