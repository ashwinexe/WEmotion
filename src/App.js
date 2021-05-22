import React from 'react';
import { 
  Card,
  Typography,
  Zoom,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Navbar } from './components';
import './App.css';
import SampleFirebaseComponent from './components/SampleFirebaseComponent'


const useAppStyles = makeStyles({
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    fontFamily: 'Open Sans',
  },
  card: {
    // display: 'flex',
    // minHeight: 100,
    // minWidth: 120,
    padding: 10,
    margin: '12px',
    backgroundColor: '#d5adfb',
    color: '#050831',
    textAlign: 'center',
    borderRadius: 5,
  },
  
  text: {
    fontFamily: 'Open Sans',
  }
});

export default function App() {
  const classes = useAppStyles();
  const emotionList = [
    'surprise',
    'bad',
    'afraid',
    'angry',
    'disgust',
    'sad',
    'happy',
  ];

  function hover(e) {
    e.target.style.background = '#133072';
    e.target.style.color = '#FFFFFF';
  }

  function unhover(e) {
    e.target.style.background = '#d5adfb';
    e.target.style.color = '#050831';
  }

  return (
    <>
    {/* <Navbar />
      <div className={classes.cards}>
        {emotionList.map((emotion, delay) => {
          return (
            <Zoom in="true" style={{ transitionDelay: delay }} timeout={800}>
              {/* <Card className={classes.card} onMouseEnter={hover} onMouseLeave={unhover}> */}
                  {/* <Typography variant="h5" component="h2" className={classes.card} onMouseOver={hover} onMouseOut={unhover}>
                      {emotion}
                  </Typography>
            </Zoom>
          )
        })}
      </div> */} 
      <SampleFirebaseComponent></SampleFirebaseComponent>
    </>
  );
}