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

import MultipleSelection from './MultipleSelection'
import DatePicker from './DatePicker'

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
}));
export default function SideBar(props) {
    const classes = useStyles();
    const theme = useTheme();

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
          <Typography variant="h6" component="h2" className={classes.textBox}>Location and date</Typography>
            <IconButton onClick={props.handleDrawerClose} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem children key="Location">
              <MultipleSelection getForecast={props.getForecast} />
            </ListItem>
          </List>
          <List>
              <ListItem button key="StartDate">
                <DatePicker label="Select start date"/>
              </ListItem>
              <ListItem button key="EndDate">
                <DatePicker label="Select end date"/>
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