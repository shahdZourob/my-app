import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
         
           <p className="news">
           <div className="container-fluid">
    <img className="vc_img-placeholder vc_single_image-img" src="/images/fci-logo.png" alt="logo" style={{height:'100px'}}></img>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      </div>
              </p>  
          
          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Info" ? "active" : ""
                  }`}
              >
                <Link className="nav-link" to="/Info">
                                 About
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Maps" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Maps">
                                
                </Link>
              </li>
              
              <li
                className={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/about">
                  Study At FCI
                </Link>
              </li>

              <li 
                className={`nav-item  ${
                  props.location.pathname === "/Events" ? "active" : ""
                }`}
              >
                
                 <Link  className="nav-link" to="/Events">
                  News & Events
                  </Link>

              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact">
                  Useful Links
                </Link>
              </li>

              <li
                className={`nav-item  ${
                  props.location.pathname === "/con" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/con">
                Student Services                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Activity" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Activity">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Cultural" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Cultural">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Artistic" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Artistic">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Sport" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Sport">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Student" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Student">
                                
                </Link>
              </li>
              
              <li
                className={`nav-item  ${props.location.pathname === "/LectureSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/LectureSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeOneLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeOneLecture">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeTwoLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeTwoLecture">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeThirdISLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeThirdISLecture">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeThirdCSLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeThirdCSLecture">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeFourISLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeFourISLecture">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeFourCSLecture" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeFourCSLecture">
                                
                </Link>
              </li>

              <li
                className={`nav-item  ${props.location.pathname === "/ExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/ExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeOneExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeOneExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeTwoExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeTwoExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeThirdISExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeThirdISExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeThirdCSExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeThirdCSExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeFourISExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeFourISExamSchedule">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/GradeFourCSExamSchedule" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GradeFourCSExamSchedule">
                                
                </Link>
              </li>

              <li
                className={`nav-item  ${props.location.pathname === "/ExamResults" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/ExamResults">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/SittingNumber" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/SittingNumber">
                                
                </Link>
              </li>

              <li
                className={`nav-item  ${props.location.pathname === "/GraduationCertificate" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/GraduationCertificate">
                                
                </Link>
              </li>
              <li
                className={`nav-item  ${props.location.pathname === "/Submit" ? "active" : ""
                    }`}
              >
                <Link className="nav-link" to="/Submit">
                                
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