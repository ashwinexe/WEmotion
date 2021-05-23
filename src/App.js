import React from "react";
import "./App.css";
// import { 
//   Home,
//   Login,
//   Signup,
//   New,
//   Navbar,
// } from "./components/index";
import Home from "./components/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import ForgotPassword from "./components/ForgotPassword"
import New from "./components/New"
import Navbar from "./components/Navbar"
import Date from "./components/Date"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import "bootstrap/dist/css/bootstrap.min.css"
import PrivateRoute from "./components/PrivateRoute"
import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Navbar />
      <Switch>
        {/* // try using components  */}
        {/* change Route to PrivateRoute for /New and /Date when not testing */}
        <Route exact path="/New" component={New} />
        <Route path="/Date" component={Date} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/sample" component={SampleFirebaseComponent} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
    </AuthProvider>

    </div>
  );
};

export default App;
