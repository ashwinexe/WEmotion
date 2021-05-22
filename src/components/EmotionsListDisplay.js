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

  const emotionListColor = {
    surprise: "#FE886A",
    bad: "#A3DEE8",
    afraid: "#6ACBDE",
    angry: "#EEAFC5",
    disgust: "#F2E9D3",
    sad: "#DA8EC0",
    happy: "#F7CCD1",
  };

  return (
    <>
      <div className={classes.cards}>
        {emotionList.map((emotion, delay) => {
          return (
            <EmotionCard
              delay={delay}
              emotionWord={emotion}
              color={emotionListColor[emotion]}
            />
          );
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
