import React, { Component } from "react";
import axios from 'axios';



async function getUsers() {
    try {
      const response = await axios.get('https://fciscu.herokuapp.com/auth/register/');
      console.log(response);
    } catch (error) {
      console.error(error) ;
      
    }
  
  }

  class Rigister extends Component {
    componentDidMount(){
        getUsers();
      }
    render() {

        return (
            <div className="outer">
            <div className="inner">
             <form> 
              <h3>Register</h3>
              <div className="form-group"> 
               <label>First name</label>
               <input type="text" className="form-control" placeholder="First name"/>
              </div>
              <div className="form-group">
               <label>Last name</label>
               <input type="text" Name="form-control" placeholder="Last name"/>
              </div>
              <div className="form-group">
               <label>Email</label>
               <input type="email" className="form-control" placeholder="Enter email"/>
              </div><div className="form-group">
               <label>Password</label>
               <input type="password" className="form-control" placeholder="Enter password"/>
              </div>
              <div className="form-group">
               <label>student id</label>
               <input type="password" className="form-control" placeholder="Enter student id"/>
              </div>
              <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
              <p className="forgot-password text-right">Already registered <a href="#">log in?</a></p>
             </form>
            </div>
           </div>
    


        );
    }
}
export default Rigister;