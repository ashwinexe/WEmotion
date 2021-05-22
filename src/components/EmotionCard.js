import React from "react";
import { Card, Typography, Zoom } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//component for each individual emotion card
const EmotionCard = ({ emotionWord, delay }) => {
  const classes = useAppStyles();

  function hover(e) {
    e.target.style.background = "#133072";
    e.target.style.color = "#FFFFFF";
  }

  function unhover(e) {
    e.target.style.background = "#d5adfb";
    e.target.style.color = "#050831";
  }
  return (
    <div>
      <Zoom in="true" style={{ transitionDelay: delay }} timeout={800}>
        <Card
          className={classes.card}
          onMouseEnter={hover}
          onMouseLeave={unhover}
        >
          <Typography
            variant="h5"
            component="h2"
            className={classes.card}
            onMouseOver={hover}
            onMouseOut={unhover}
          >
            {emotionWord}
          </Typography>
        </Card>
      </Zoom>
    </div>
  );
};

export default EmotionCard;

//styles
const useAppStyles = makeStyles({
  card: {
    // display: 'flex',
    // minHeight: 100,
    // minWidth: 120,
    padding: 10,
    margin: "12px",
    backgroundColor: "#d5adfb",
    color: "#050831",
    textAlign: "center",
    borderRadius: 5,
  },

  text: {
    fontFamily: "Open Sans",
  },
});
