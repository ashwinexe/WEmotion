import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import FirebaseContext from './Firebase/context'
import { firestore }  from './Firebase/firebase'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={firestore}>
      <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
