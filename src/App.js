import React from "react";
import Navbar from "./components/Navbar";
import EmotionListDisplay from "./components/EmotionsListDisplay";
import "./App.css";
import Home from "./components/Home"
import New from "./components/New"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar></Navbar> 
      <Switch>
        {/* <Route path="/"><Home /></Route> */}
        <Route path="/New"><New /></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
      </Switch>
      {/* <EmotionListDisplay />  */}
      {/* component to display list of emotion */}
    </Router>
      {/* <SampleFirebaseComponent></SampleFirebaseComponent> */}
    </div>
  );
};

export default App;
