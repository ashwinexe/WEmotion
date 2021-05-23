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
import { AuthProvider } from "./components/Auth";
import "bootstrap/dist/css/bootstrap.min.css"
// import SampleFirebaseComponent from "./components/SampleFirebaseComponent";

const App = () => {
  return (
    <div>
    <AuthProvider>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/New"><New /></Route>
        <Route path="/Signup"><Signup /></Route>
        <Route path="/Login"><Login /></Route>
        <Route exact path="/"><Home /></Route>
      </Switch>
    </Router>
    </AuthProvider>
      {/* <SampleFirebaseComponent></SampleFirebaseComponent> */}
    </div>
  );
};

export default App;
