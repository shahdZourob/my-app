import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,  Home, About, Contact, Events,Info,Maps, Con, Activity, Student,LectureSchedule, ExamSchedule, ExamResults, GraduationCertificate, Submit, Cultural, Artistic, Sport, GradeOneExamSchedule, GradeTwoExamSchedule, GradeThirdISExamSchedule, GradeThirdCSExamSchedule, GradeFourISExamSchedule, GradeFourCSExamSchedule, GradeOneLecture, GradeTwoLecture, GradeThirdISLecture, GradeThirdCSLecture, GradeFourISLecture, GradeFourCSLecture, SittingNumber} from "./components";
import Login from "./components/login.component";
import Rigister from "./components/Register";




function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/Events" exact component={() => <Events />} />
          <Route path="/Info" exact component={() => <Info />} />
          <Route path="/Maps" exact component={() => <Maps />} />
          <Route path="/con" exact component={() => <Con />} />
          <Route path="/Activity" exact component={() => <Activity />} />
          <Route path="/cultural" exact component={() => <Cultural />} />
          <Route path="/Artistic" exact component={() => <Artistic />} />
          <Route path="/Sport" exact component={() => <Sport />} />

          <Route path="/Student" exact component={() => <Student />} />

          <Route path="/LectureSchedule" exact component={() => <LectureSchedule />} />
          <Route path="/GradeOneLecture" exact component={() => <GradeOneLecture />} />
          <Route path="/GradeTwoLecture" exact component={() => <GradeTwoLecture />} />
          <Route path="/GradeThirdISLecture" exact component={() => <GradeThirdISLecture />} />
          <Route path="/GradeThirdCSLecture" exact component={() => <GradeThirdCSLecture />} />
          <Route path="/GradeFourISLecture" exact component={() => <GradeFourISLecture />} />
          <Route path="/GradeFourCSLecture" exact component={() => <GradeThirdCSLecture />} />

          <Route path="/ExamSchedule" exact component={() => <ExamSchedule />} />
          <Route path="/GradeOneExamSchedule" exact component={() => <GradeOneExamSchedule />} />
          <Route path="/GradeTwoExamSchedule" exact component={() => <GradeTwoExamSchedule />} />
          <Route path="/GradeThirdISExamSchedule" exact component={() => <GradeThirdISExamSchedule />} />
          <Route path="/GradeThirdCSExamSchedule" exact component={() => <GradeThirdCSExamSchedule />} />
          <Route path="/GradeFourISExamSchedule" exact component={() => <GradeFourISExamSchedule />} />
          <Route path="/GradeFourCSExamSchedule" exact component={() => <GradeThirdCSExamSchedule />} />

          <Route path="/ExamResults" exact component={() => <ExamResults />} />
          <Route path="/SittingNumber" exact component={() => <SittingNumber />} />

          <Route path="/GraduationCertificate" exact component={() => <GraduationCertificate />} />
          <Route path="/Submit" exact component={() => <Submit />} />


          







          <Route path="/sign-in" component={Login} />
          <Route path="/log-in" component={ Rigister} />
          


        </Switch>
        
      </Router>
    </div>
  );
}
export default App;