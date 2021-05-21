import React from 'react';
import { 
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useAppStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  card: {
    minWidth: 275,
    margin: '12px',
  }
})

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
  ]

  return (
    <div className={classes.root}>
      {emotionList.map((emotion) => {
        return (
          <Card className={classes.card}>
            <CardContent>
            <Typography variant="h5" component="h2">
              {emotion}
            </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>
  );
}