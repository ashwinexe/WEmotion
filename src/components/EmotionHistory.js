import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import FirebaseContext from '../Firebase/context'
import { useAuth } from './Auth'
import { css } from "@emotion/react";
import HashLoader from "react-spinners/ClipLoader";
import { Card, Typography, Grow } from "@material-ui/core";

const useAppStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    cards: {
      width:'600px',
      fontFamily: "Open Sans",
    },
});

const override = css`
  display: block;
  margin: 0 auto;
  marginTop: 30px;
`;

const EmotionHistory = () => {

    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState("#19BD9D");
    const [emotions, setEmotions] = useState([])


    const userAuth = useAuth();
    const firestore = useContext(FirebaseContext)
    const classes = useAppStyles();

    useEffect(() => {
          const db = firestore.collection(`UserData/${userAuth.currentUser.uid}/user-emotions`).onSnapshot(
            (items) => {
              setLoading(false)
              const emotionData = []
              items.forEach((item) => {
                let id = item.id;
                let data = item.data();
                emotionData.push(data);
              });
              setEmotions(emotionData)
            },
            (err) => {
              console.log(`Encountered error: ${err}`);
            }
          );
    }, [])

    return (
    <div className={classes.root}>
        <div className={classes.cards}>
     {loading ? (
            <div className="sweet-loading">
               <h5 style= {{marginTop: '10px'}}>Loading your emotion history</h5>
               <HashLoader color={color} loading={loading} css={override} size={100} />
           </div>
     ): 
     (
         <div>
        <h5 style={{ marginTop:'10px' }}>Your emotion history</h5>
 

            {emotions.map((item)=> {
                return(
                    <Card style={{marginTop: '20px', padding: '15px', backgroundColor:`${item.color}`, color:'#ffffff'}}>
                        <div>{item?.emotion}</div>
                        <div>Recorded at {`${item?.date.toDate().toDateString()} ${item?.date.toDate().toLocaleTimeString('en-US')}`}</div>
                    </Card>
                )
            })}
        </div>

     )
     }
        </div>
    </div>
    )
}

export default EmotionHistory
