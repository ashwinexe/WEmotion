import React, { useState, useContext, useEffect } from "react";
import EmotionCard from "./EmotionCard";
import { makeStyles } from "@material-ui/core/styles";
import Popup from "./popup";
import EmotionInfo from "./Emotion Info/EmotionInfo";
import FirebaseContext from '../Firebase/context'
import { useAuth } from './Auth'

const EmotionListDisplay = () => {
  const firestore = useContext(FirebaseContext)
  const classes = useAppStyles();
  const [currentEmotionActive, setCurrentEmotionActive] = useState("surprise"); //emotion card clicked on
  const [popUpEmotion, setpopUpEmotion] = useState(null);
  const [level2Active, setLevel2Active] = useState(false);
  // const [level3Active, setLevel3Active] = useState(false);
  const [popUp, setpopUp] = useState(false);
  const userAuth = useAuth();

  useEffect(() => {
    console.log(firestore, "FIRESTORE")
    console.log(userAuth.currentUser.uid)

      const db = firestore.collection(`UserData/${userAuth.currentUser.uid}/user-emotions`).onSnapshot(
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

  })

  //simple emotions
  const emotionList = [
    "Surprise",
    "Bad",
    "Afraid",
    "Angry",
    "Disgust",
    "Sad",
    "Happy",
  ];

  //PLACEHOLDER FOR DB -second level of words, depending on what been clicked--it doesn't need to be in the db
  const level2Words = {
    Surprise: [
      "Shock", 
      "Confusion", 
      "Amazement", 
      "Excitement"
    ],
    Happy: [
      "Playful",
      "Content",
      "Curiosity",
      "Proud",
      "Acceptance",
      "Powerful",
      "Care",
      "Trust",
      "Hope",
    ],
    Sad: [
      "Lonely", 
      "Vulnerable", 
      "Despiar", 
      "Guilty", 
      "Depression", 
      "Hurt"
    ],
    Disgust: [
      "Disapproval", 
      "Disdain", 
      "Sick", 
      "Repulsion"
    ],
    Angry: [
      "Mistrust",
      "Shame",
      "Jealous",
      "Mad",
      "Irritation",
      "Frustration",
      "Distant",
      "Critical",
    ],
    Bad: [
      "Boredom", 
      "Busy", 
      "Stress", 
      "Tired"
    ],
    Afraid: [
      "Scared", 
      "Anxious", 
      "Insecure", 
      "Weak", 
      "Shaky", 
      "Nervous"
    ],
  };

  //colors for all emotions (would be in database)
  const emotionListColor = {
    Surprise: "#8FCDD4",
    Bad: "#DB7558",
    Afraid: "#ACD8CB",
    Angry: "#F6A6B6",
    Disgust: "#FFCF57",
    Sad: "#DA8EC0",
    Happy: "#FFB19B",
  };

  //updating display depending on what word has been clicked
  const updateDisplay = (word) => {
    setCurrentEmotionActive(word);
    setLevel2Active(true);
  };

  let level2 = level2Active;
  const renderBackButton = () => {
    if (level2) {
      return (
        <button className={classes.back} onClick={() => setLevel2Active(false)}>
          Go back
        </button>
      );
    }
  };

  // db.collection("Emotions").doc("OVF7WuFoJAqAmECns3NM").set({
  //     emotion: "Los Angeles",
  //     desc: "CA",
  // })
  // .then(() => {
  //     console.log("Document successfully written!");
  // })
  // .catch((error) => {
  //     console.error("Error writing document: ", error);
  // });

  //conditionally rendering next level of words, depending on what user clicked on

  const handleSave = () => {
    firestore.collection('UserData').doc(userAuth.currentUser.uid).collection('user-emotions').add({
      emotion: `${popUpEmotion}`,
      date: new Date()
    }, { merge: true })
  }

  return (
    <div className={classes.root}>
      <div className={classes.cards}>
        {
          //conditional if to check if word has been clicked on and update display
          !level2Active
            ? emotionList.map((emotion, delay) => {
                return (
                  <EmotionCard
                    key={delay}
                    emotionClicked={updateDisplay}
                    delay={delay + 200}
                    emotionWord={emotion}
                    color={emotionListColor[emotion]}
                  />
                );
              })
            : //renders second level of words if level2Words state active
              level2Words[currentEmotionActive].map((emotion, delay) => {
                return (
                  <EmotionCard
                    // onClick={() => setpopUp(true)}
                    key={delay}
                    emotionClicked={() => {
                      setpopUp(true);
                      setpopUpEmotion(emotion);
                    }}
                    delay={delay}
                    emotionWord={emotion}
                    color={"#ACD8CB"}
                  />
                );
              })
        }
      </div>

      <Popup trigger={popUp} setTrigger={setpopUp}>
        <h3>{`${popUpEmotion}, ${popUpEmotion}, ${popUpEmotion}, ${popUpEmotion}, ${popUpEmotion},`}</h3>
        <EmotionInfo word={popUpEmotion} />

        {/* button to log emotion into database*/}
        <button
          onClick={() => {

            handleSave()
            setpopUp(false);
          }}
        >
          Log Emotion?
        </button>
      </Popup>

      {renderBackButton()}
      {/*button to go back to previous words*/}
    </div>
  );
};

const useAppStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    fontFamily: "Open Sans",
  },
  back: {
    display: "inline-block",
    border: "none",
    padding: "1rem 2rem",
    margin: "32px",
    textDecoration: "none",
    background: "#133072",
    color: "#FFFFFF",
    cursor: "pointer",
    textAlign: "center",
    fontFamily: "Open Sans",
  },
});

export default EmotionListDisplay;
