import React, { Component } from "react";

import FirebaseContext  from "../Firebase/context";

const SampleFirebaseComponent = () => {
  return (
    <FirebaseContext.Consumer>
      {(firestore) => {
        const db = firestore.collection("Emotions").onSnapshot(
          (items) => {
            items.forEach((item) => {
              let id = item.id;
              let data = item.data();

              console.log(data);
            });
            // ...
          },
          (err) => {
            console.log(`Encountered error: ${err}`);
          }
        );

        console.log(db);

        return <div>I've access to Firebase and render something.</div>;
      }}
    </FirebaseContext.Consumer>
  );
};

export default SampleFirebaseComponent;
