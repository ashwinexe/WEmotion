import React, { useEffect, useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FirebaseContext from '../Firebase/context'
import { useAuth } from './Auth'

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
});

const EmotionHistory = () => {
    return (
    <div className={classes.root}>
      <div className={classes.cards}>
        
      </div>
    </div>
    )
}

export default EmotionHistory
