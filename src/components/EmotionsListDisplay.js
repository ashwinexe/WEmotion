import React from "react";
import EmotionCard from "./EmotionCard";
import { makeStyles } from "@material-ui/core/styles";

const EmotionListDisplay = () => {
  const classes = useAppStyles();
  //simple emotions
  const emotionList = [
    "surprise",
    "bad",
    "afraid",
    "angry",
    "disgust",
    "sad",
    "happy",
  ];

  return (
    <>
      <div className={classes.cards}>
        {emotionList.map((emotion, delay) => {
          return <EmotionCard delay={delay} emotionWord={emotion} />;
        })}
      </div>
    </>
  );
};

const useAppStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    fontFamily: "Open Sans",
  },
});

export default EmotionListDisplay;
