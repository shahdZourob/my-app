import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation,  Home, About, Contact, Events,Info,Maps, Con } from "./components";
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

          <Route path="/sign-in" component={Login} />
          <Route path="/log-in" component={ Rigister} />


        </Switch>
        
      </Router>
    </div>
  );
}
export default App;