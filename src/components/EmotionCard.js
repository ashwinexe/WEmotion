import React, { useState } from "react";
import { Card, Typography, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//styles
const useAppStyles = makeStyles({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 100,
    minWidth: 120,
    // padding: 30,
    margin: "20px",
    backgroundColor: (styleProps) => styleProps.backgroundColor,
    color: "black",
    textAlign: "center",
    borderRadius: 5,
    "&:hover": {
      backgroundColor: "#133072",
      color: "#FFFFFF",
    },
    cursor: "pointer",
  },
  text: {
    fontFamily: "Open Sans",
    textAlign: "center",
  },
});

//component for each individual emotion card
const EmotionCard = ({ emotionWord, delay, color, emotionClicked }) => {
  //style props
  const styleProps = { backgroundColor: color };
  const classes = useAppStyles(styleProps);

  return (
    <div onClick={() => emotionClicked(emotionWord)}>
      <Grow in="true" style={{ transitionDelay: delay }} timeout={800}>
        <Card className={classes.card}>
          <Typography className={classes.text} variant="h5" component="h2" align="center">
            {emotionWord}
          </Typography>
        </Card>
      </Grow>
    </div>
  );
};

export default EmotionCard;
