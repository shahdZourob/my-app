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
            <div className="sigin">
                <div className="inner">
                    <form>
                        <h3>Log in</h3>
                        <div className="form-group">
                            <label>Email</label>
                             <input type="email" className="form-control" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password"/>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                <label className="custom-control-label" for="customCheck1">Remember me</label>
                             </div>
                        </div>
                        <button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</button>
                        <p className="forgot-password text-right">Forgot <a href="#">password?</a></p>
                    </form>  
                </div>
            </div>
        );
    }
}
export default Login;