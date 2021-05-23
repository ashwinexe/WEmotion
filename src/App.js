import React from "react";
import "./App.css";
import { 
  Home,
  Login,
  Signup,
  New,
  Navbar,
} from "./components/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/New"><New /></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
      {/* <SampleFirebaseComponent></SampleFirebaseComponent> */}
    </div>
  );
};

export default App;
