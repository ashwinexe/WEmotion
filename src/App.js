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
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./components/Auth";
import "bootstrap/dist/css/bootstrap.min.css"
import PrivateRoute from "./components/PrivateRoute"

// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Navbar />
      <Switch>
        <PrivateRoute exact path="/New"><New /></PrivateRoute>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/forgot-password"><ForgotPassword /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
    </AuthProvider>
      {/* <SampleFirebaseComponent></SampleFirebaseComponent> */}
    </div>
  );
};

export default App;
