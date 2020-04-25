import React, { useEffect } from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import Dashboard from './Dashboard'
import SideBar from './SideBar'
import API from '../api'
import config from '../config'
import image from "../assets/img/sky.jpg";

const drawerWidth = 300;
const imageHeight = '150px'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }) ,
    height: '25%',
    backgroundColor: '#A9A9A9',
    position:'absolute'
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
    backgroundImage: '-webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + '),linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + ')',
    backgroundSize: 'cover',
    height: imageHeight,
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
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: imageHeight

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
    const [open, setOpen] = React.useState(false);
    const [data, setData] = React.useState([]);
    const [days, setDays] = React.useState(5)

    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    console.log("RENDER HOME")
    const handleDrawerClose = () => {
      setOpen(false);
    };

    const getForecast = async locations  => {
      let responses = []
      console.log(locations)
        for (let i=locations.length - 1; i >= 0; i--) {
          let cityName = locations[i].description.split(',')[0]
          cityName = cityName.includes(' ') ? cityName.replace(' ', '+') : cityName
          let { data } = await API.get(`?q=${cityName}&APPID=${config.API_KEY}&units=metric`)
          responses.push(data)
        }
        setData(responses)
    }

    useEffect( ()=> {
      const  getForecast = async () => {
        try {
          const response = await API.get(`?q=Novi+Sad&APPID=${config.API_KEY}&units=metric`)
          setData([response.data])
        } catch(error){
          console.log(error)
        }
      }
      //getForecast()
    }, [])
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
              size="medium"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.textBox}>
            <Typography variant="h6" className={classes.headerTitle}>
              Weekly weather forecast
            </Typography>
            </div>
          </Toolbar>
        </AppBar>
        <SideBar 
          open={open}
          handleDrawerClose={handleDrawerClose}
          getForecast={getForecast}
          setDays={setDays}
          days={days}
        />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <Dashboard data={data} days={days}/>
        </main>
        </div>
    )
}