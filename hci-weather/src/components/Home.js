import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';


import Dashboard from './Dashboard'
import SideBar from './SideBar'
import API from '../api'
import config from '../config'
import image from "../assets/img/sky.jpg";

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }) ,
    height: '25%'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  header: {
    backgroundImage: '-webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + ')' ,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + ')',
    backgroundSize: 'cover',
    height: '21%',
    backgroundPosition: 'center'
  },
  headerTitle: {
    position: 'absolute',
    textAlign: 'center',
    width: '1140px',
    left: '50%',
    top: '50px',
    webkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    fontWeight: '300',
    textTransform: 'uppercase',
    marginBottom: '20px',
    color: '#fff',
    fontSize: '240%',
    wordSpacing: '4px',
    letterSpacing: '1px'
  },

  textBox: {
    position: 'absolute',
    width: '1140px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Home() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [data, setData] = React.useState({});
    let locations = []

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const setLocations = locationsArr => {
      locations = locationsArr
    }
    useEffect( ()=> {
      const  getForecast = async () => {
        try {
          const data = await API.get(`?q=NoviSad&APPID=${config.API_KEY}`)
        } catch(error){
          console.log(error)
        }
      }
      //getForecast()
      console.log('da')
    })
    return (
      <div className={classes.root}>
      <Helmet>
          <title>Wheater app</title>
      </Helmet>
      <CssBaseline />
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
                }, classes.header)}
            
        >
          <Toolbar variant="dense">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.textBox}>
            <Typography variant="h6" className={classes.headerTitle}>
              Get weather forecast for five 5 days
            </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <SideBar 
          open={open}
          handleDrawerClose={handleDrawerClose}
          setLocations={setLocations}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <Dashboard />
        </main>
        </div>
    )
}