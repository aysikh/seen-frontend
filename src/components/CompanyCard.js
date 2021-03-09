import React, { Component } from 'react';
import { matchPath } from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Rating from '@material-ui/lab/Rating';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import DemographicChart from './DemographicChart'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    fontFamily: 'Josefin Sans',
    height: '25rem',
    width: '28rem',
    margin: '3.5rem'
  },
  topInfo: {
    fontFamily: 'Josefin Sans',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
  description: {
    fontFamily: 'Cardo',
    backgroundColor: 'black',
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    display: "absolute",
    left: "20%",
    height: "10%",
    width: "auto"
  },
  stats: {
    fontFamily: 'Cardo', 
    display: "absolute",
  }
}))

export default function CompanyCard(props){
  const classes = useStyles();

  const match = matchPath("/company/1", {
    path: "/company/:id",
    exact: true,
    strict: true
  });

  console.log(match)

  return(
    <div className="company-info-container">
      <div id="company-name" className={classes.topInfo}>
        <img src={props.comp.logo} style={{height: '6rem', marginTop: '.5rem', marginRight: '.5rem'}}/> 
        <span style={{fontSize: '3rem'}}>{props.comp.name}</span>
        <br /><br />
        <LocationOnIcon /> <span style={{fontSize: '1.25rem'}}>{props.comp.location}</span>
      </div>
      <div className={classes.description}>
        <h2 style={{color: 'white'}}>{props.comp.description}</h2>
      </div>
      <div id="company-stats" className={classes.stats}>
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
            <Grid>
              <Paper className={classes.paper} >
                <DemographicChart />
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.paper} >
                <center> 
                  <PeopleIcon style={{fontSize: '10rem', color: 'gray'}}/>
                  <h1>{props.comp.size} employees</h1>
                </center>
              </Paper>
            </Grid>
            <Grid>
              <Paper className={classes.paper} >
                <center>
                <br/><br/>
                <span style={{fontSize:'3rem'}}>DEI Rating:</span>
                <Rating 
                name="read-only" 
                style={{color: '#99EEBB', fontSize: '5rem', marginTop: '3rem'}} 
                precision={0.5} 
                value={4.5} 
                readOnly />
                  <br /> 
                  <span style={{fontSize: '5.5rem'}}>4.5</span>
                </center>
              </Paper>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
      </div>
    </div>
  )
}