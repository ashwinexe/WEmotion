import React from 'react'
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import One from "./img/1.png"
import Two from "./img/2.png"
import Three from "./img/3.png"
import Four from "./img/4.png"

const useHomeStyles = makeStyles({
    root: {
        height: 'calc(100vh - 80px)',
        width: '100vw',
        overflow: 'hidden',
    }
})

export default function Home() {
    const classes = useHomeStyles();
    return (
        <Carousel className={classes.root}>
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
    )
}
