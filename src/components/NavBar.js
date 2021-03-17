import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import SeenSimple from '../assets/seen-simple.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    backgroundColor: 'white', 
  },
}));


export default function NavBar() {
  const classes = useStyles();

  return(
    <div>
      <AppBar position="static" className={classes.logo}>
        <center>
          <img src={SeenSimple} style={{width: '6rem'}}/>
        </center>
      </AppBar>
    </div>
  )
}