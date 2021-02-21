import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
         
           <p className="news">
           <div class="container-fluid">
    <img className="vc_img-placeholder vc_single_image-img" src="http://stage.suez.edu.eg/wp-content/uploads/2019/05/logo2.png" alt="logo"></img>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      </div>
              </p>  
          
          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${props.location.pathname === "/Info" ? "active" : ""
                  }`}
              >
                <Link class="nav-link" to="/Info">
                                 About
                </Link>
              </li>

              <li
                class={`nav-item  ${props.location.pathname === "/Maps" ? "active" : ""
                    }`}
              >
                <Link class="nav-link" to="/Maps">
                                
                </Link>
              </li>
              
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  Study At Suez Canal University
                </Link>
              </li>

              <li 
                class={`nav-item  ${
                  props.location.pathname === "/Events" ? "active" : ""
                }`}
              >
                
                 <Link  class="nav-link" to="/Events">
                  News & Events
                  </Link>

              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Useful Links
                </Link>
              </li>

              <li
                class={`nav-item  ${
                  props.location.pathname === "/con" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/con">
                  مبنى الرعاية المركزية
                </Link>
              </li>




              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/log-in"}>Register</Link>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);