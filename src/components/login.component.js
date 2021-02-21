import React, { Component } from "react";
import axios from 'axios';



async function getUsers() {
    try {
      const response = await axios.get('https://fciscu.herokuapp.com/auth/login/');
      console.log(response);
    } catch (error) {
      console.error(error) ;
      
    }
  
  }

  class Login extends Component {
    componentDidMount(){
        getUsers();
      }
    render() {

        return (
            <div class="sigin">
                <div class="inner">
                    <form>
                        <h3>Log in</h3>
                        <div class="form-group">
                            <label>Email</label>
                             <input type="email" class="form-control" placeholder="Enter email"/>
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" placeholder="Enter password"/>
                        </div>
                        <div class="form-group">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                <label class="custom-control-label" for="customCheck1">Remember me</label>
                             </div>
                        </div>
                        <button type="submit" class="btn btn-dark btn-lg btn-block">Sign in</button>
                        <p class="forgot-password text-right">Forgot <a href="#">password?</a></p>
                    </form>  
                </div>
            </div>
        );
    }
}
export default Login;