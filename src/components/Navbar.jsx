import React from 'react';
import {
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useNavStyles = makeStyles({
  root: {
    backgroundColor: '#d5e6f7',
    fontFamily: 'Open Sans',
    fontSize: '32px',
    color: '#050831',
    position: 'relative',
  },
  link: {
    color: '#050831',
    margin: '32px 16px',
    padding: '4px',
    textDecoration: 'none',
  },
  crisis: {
    backgroundColor: '#f90052',
    color: '#050831',
    position: 'absolute',
    right: '16px',
    padding: '0 4px',
  },
})

export default function Navbar() {
  const classes = useNavStyles();
  const navbarList = [
    'Home', // this is where the Alexithymia info will go
    'New', // this is where the user will input new emotions
    'Timeline', // this is where the calendar will go
    'Settings', // this is a duh
  ]

  return (
    <div className={classes.root}>
      {navbarList.map((item) => {
        return (
          <Link className={classes.link} href="/">{item}</Link>
        )
      })}
      <Link className={classes.crisis} href="https://suicidepreventionlifeline.org/">CRISIS</Link>
    </div>
  );
}