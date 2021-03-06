import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Logo from '../assets/seenlogo1.png'
import LandingPageAppInfo from '../components/LandingPageAppInfo'


const useStyles = makeStyles((theme) => ({
  bg: {
      width: '100%', 
      minHeight: '90vh',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
    },
  image: {
      marginTop: '5rem', 
      width: '25rem', 
    }
  }));


export default function LandingPageContainer(props) {
  const classes = useStyles();

  return (
    <div className={classes.bg} > 
      <LandingPageAppInfo {...props} /> 
      <center> <img src={Logo} alt="landing-page-logo" className={classes.image}/>  </center>
    </div> 
  )
}
