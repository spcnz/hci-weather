import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import TextField from '@material-ui/core/TextField';

import MultipleSelection from './MultipleSelection'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#F5F5F5'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  textBox: {
    fontWeight: '300',
    textTransform: 'uppercase',
    color: '#283593'
  },
  label: {
    color: '#283593'
  }
}));


export default function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [days, setDays] = React.useState(5)
    const validInput = typeof days == 'number' && days >= 0 && days < 6;
    const errMsg = days < 0 ? 'Number of days must be positive' : days > 5 ? 'Get forecast for max 5 days in advance' : ''
    
    if (validInput) 
      props.setDays(days)
      
    const handleInput = event => {
      setDays(parseInt(event.target.value));
    };

    return (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={props.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
          <Typography variant="h6" component="h2" className={classes.textBox}>Location and days</Typography>
            <IconButton onClick={props.handleDrawerClose} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem  key="locationLabel">
              <Typography variant="h6" component="h2" className={classes.label}>
                Choose location
              </Typography>
              </ListItem>
            <ListItem children key="location">
              <MultipleSelection getForecast={props.getForecast} />
            </ListItem>
          </List>
          <List>
            <ListItem  key="daysLabel">
            <Typography variant="h6" component="h2" className={classes.label}>
              Insert number of days
            </Typography>
            </ListItem>
            <ListItem key="days">
              <TextField
                fullWidth
                error={!validInput}
                onChange={e => handleInput(e)}
                helperText={errMsg}
                id="outlined-number"
                label="Days"
                type="number"
                defaultValue="5"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </ListItem>
            <ListItem>
            <Button 
                variant="contained" 
                color="primary"
                size="large"
                onClick={() => props.getForecast([]) }
                startIcon={<DoneIcon />}
                style={{ 
                  position: 'relative',
                  top:20,
                  right: 15,
                  left: '30%'
                  }}
                >
                Get forecast
              </Button>
            </ListItem>
          </List>   
        </Drawer>
    );
  }