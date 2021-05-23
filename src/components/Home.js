import React from 'react';
import {
    Button,
    Link,
    Paper,
    Grid,
} from '@material-ui/core';
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import One from "./img/1.png"
import Two from "./img/2.png"
import Three from "./img/3.png"
import Four from "./img/4.png"

const useHomeStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carousel: {
        height: 'calc(100vh - 80px)',
        width: '98.9vw',
        overflow: 'hidden',
    },
    button: {
        padding: '20px',
        margin: '60px',
        fontSize: '32px',
    },
    link: {
        color: '#FFFFFF',
        "&:hover": {
            textDecoration: 'none',
            color: 'inherit',
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    heading: {
        textAlign: 'center', 
        padding: '32px',
    },
    grid: {
        margin: '20px',
        display: 'flex',
        justifyContent: 'center',
    }
}));

export default function Home() {
    const classes = useHomeStyles();
    return (
        <div className={classes.root}>
            <Carousel className={classes.carousel}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={One}
                    alt="What is Alexithymia?"
                    style={{
                        height: 'calc(100vh - 80px)',
                        width: '100vw',
                        overflow: 'hidden',
                    }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Two}
                    alt="Second slide"
                    style={{
                        height: 'calc(100vh - 80px)',
                        width: '100vw',
                        overflow: 'hidden',
                    }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Three}
                    alt="Third slide"
                    style={{
                        height: 'calc(100vh - 80px)',
                        width: '100vw',
                        overflow: 'hidden',
                    }}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Four}
                    alt="Fourth slide"
                    style={{
                        height: 'calc(100vh - 80px)',
                        width: '100vw',
                        overflow: 'hidden',
                    }}
                    />
                </Carousel.Item>
            </Carousel>
            <Button className={classes.button} variant="contained" color="primary">
                <Link className={classes.link} href="/Login">
                    Log In
                </Link>
            </Button>
            <h1 className={classes.heading}>Learn more and gain resources here:</h1>
            <Grid container spacing={3} className={classes.grid}>
                <Grid item xs={5}>
                    <Paper elevation={3} className={classes.paper}>
                        <h3>Resources</h3>
                        <Link href="https://www.healthline.com/health/autism/alexithymia">All About Alexithymia, or Difficulty Recognizing Feelings</Link><br /><br />
                        <Link href="https://www.medicalnewstoday.com/articles/326451">What to know about alexithymia</Link>
                    </Paper>
                </Grid>
                <Grid item xs={5}>
                    <Paper elevation={3} className={classes.paper}>
                        <h3>Articles</h3>
                        <Link href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3832802/">Four decades of research on alexithymia: moving toward clinical applications <br />(Medical Publication)</Link><br /><br />
                        <Link href="https://www.self.com/story/what-alexithymia-actually-is">Here's What Alexithymia Actually Is—and Why It Can Make Therapy Challenging</Link><br /><br />
                        <Link href="https://journals.sagepub.com/doi/full/10.1177/0300060519887633">Alexithymia, traumatic stress symptoms and burnout in female healthcare professionals</Link>
                    </Paper>
                </Grid>
            </Grid>
            <br /><br />
        </div>
    )
}
