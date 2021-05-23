import React from "react";
import {
  EmotionListDisplay,
} from "./index";
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import { db } from './firebase';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function New() {
//   const classes = useStyles();
//   const [emotion, setEmotion] = useState('');
//   const [desc, setDesc] = useState('');
//   const [color, setColor] = useState(''); 
//   const date = useState(new Date());

//   function handleSubmit(e) {
//     e.preventDefault();
//     const emotion = {
//       emotion: emotion,
//       desc: desc,
//       color: color,
//       date : Date().toLocaleString(),
//     }
//     var coll = db.collection("emotion").doc("details")
//     coll.set(emotion);
    
//     //warehouseRef.push(warehouse);
//     setEmotion('');
//     setDesc('');
//     setColor('');
//   }
    

    // return (
    //   <p>hello</p>
    // )
//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <form className={classes.form} onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 autoComplete="emotion"
//                 name="emotion"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="emotion"
//                 label="Emotion"
//                 autoFocus
//                 value={emotion}
//                 onChange={(e) => setEmotion(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="desc"
//                 required
//                 fullWidth
//                 id="desc"
//                 label="Desc"
//                 name="desc"
//                 autoComplete="desc"
//                 value={desc}
//                 onChange={(e) => setDesc(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="date"
//                 label="Date"
//                 name="date"
//                 autoComplete="date"
//                 value={date}
//               />
//             </Grid>
//             <Grid item xs={12}>
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Submit
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//             </Grid>
//           </Grid>
//         </form>
//     </Container>
//   );
// }

export default function New() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '32px' }}>Which word most closely represents how you feel?</h1>
      <EmotionListDisplay />
    </div>
  );
}