import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SimpleTable from './SimpleTable'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    textAlign: 'center',
    width: '1140px',
    marginLeft: '50%',
    webkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    fontWeight: '570',
    marginBottom: '1px',
    fontSize: '200%',
    wordSpacing: '1px',
    color: "#283593",
    marginTop: '40px'
  },
}));

export default function Dashboard(props) {
  
  const classes = useStyles();
  const forecasts = props.data

  return (
    <div className={classes.root}>
       {forecasts.map(forecast => {
       let city = forecast.city || {}
       return (
         <div key={city.name}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Typography variant="h6" className={classes.title}>
                Weather in {city.name + ', ' + city.country}
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs> 
                <SimpleTable data={forecast} />
            </Grid>
            <Grid item xs>
              <Paper className={classes.paper}>xs</Paper>
            </Grid>
          </Grid>
        </div>
          )
       })}
    </div>
  );
}