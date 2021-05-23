import React from 'react';
import { Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useNavStyles = makeStyles({
  root: {
    backgroundColor: '#d5e6f7',
    fontFamily: 'Open Sans',
    fontSize: '32px',
    color: '#050831',
    position: 'relative',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: '#050831',
    margin: '32px',
    padding: '2px',
    "&:hover": {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
  crisis: {
    backgroundColor: '#f90052',
    color: '#050831',
    position: 'absolute',
    right: '16px',
    padding: '0 4px',
    borderRadius: '8px',
    borderStyle: 'solid',
    "&:hover": {
      textDecoration: 'none',
      color: 'inherit',
    },
  },
})

export default function Navbar() {
  const classes = useNavStyles();
  const navbarList = [
    {
      name: 'Home',
      to: '/'
    },
    {
      name: 'Add New Mood',
      to: '/New'
    },
    {
      name: 'Moods Over Time',
      to: '/Time'
    },
    {
      name: 'Settings',
      to: '/Settings'
    }

    // 'Home', // this is where the Alexithymia info will go
    // 'New', // this is where the user will input new emotions
    // 'Time', // this is where the calendar will go
    // 'Settings', // this is a duh
  ]

  return (
    <div className={classes.root}>
      {navbarList.map((navbarList) => {
        return (
          <Link className={classes.link} href={navbarList.to}>{navbarList.name}</Link>
        )
      })}
      <Link className={classes.crisis} href="https://suicidepreventionlifeline.org/">CRISIS</Link>
    </div>
  );
}