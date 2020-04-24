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
    backgroundColor: '#F5F5F5',
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
    backgroundImage: '-webkit-linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + ')' ,
    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url('+ image + ')',
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
          //const { data } = await API.get(`?q=Novi+Sad&APPID=${config.API_KEY}`)
          const a = JSON.parse('{"cod":"200","message":0,"cnt":40,"list":[{"dt":1587762000,"main":{"temp":284.47,"feels_like":281.32,"temp_min":284.47,"temp_max":285.47,"pressure":1009,"sea_level":1010,"grnd_level":1001,"humidity":53,"temp_kf":-1},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":75},"wind":{"speed":2.13,"deg":205},"sys":{"pod":"n"},"dt_txt":"2020-04-24 21:00:00"},{"dt":1587772800,"main":{"temp":283.67,"feels_like":280.36,"temp_min":283.67,"temp_max":284.09,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":57,"temp_kf":-0.42},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":82},"wind":{"speed":2.43,"deg":214},"sys":{"pod":"n"},"dt_txt":"2020-04-25 00:00:00"},{"dt":1587783600,"main":{"temp":283.11,"feels_like":280.2,"temp_min":283.11,"temp_max":283.24,"pressure":1009,"sea_level":1009,"grnd_level":999,"humidity":61,"temp_kf":-0.13},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":84},"wind":{"speed":1.96,"deg":267},"sys":{"pod":"n"},"dt_txt":"2020-04-25 03:00:00"},{"dt":1587794400,"main":{"temp":287.05,"feels_like":283.54,"temp_min":287.05,"temp_max":287.07,"pressure":1008,"sea_level":1008,"grnd_level":999,"humidity":58,"temp_kf":-0.02},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":70},"wind":{"speed":3.64,"deg":235},"sys":{"pod":"d"},"dt_txt":"2020-04-25 06:00:00"},{"dt":1587805200,"main":{"temp":293.21,"feels_like":289.58,"temp_min":293.21,"temp_max":293.21,"pressure":1007,"sea_level":1007,"grnd_level":998,"humidity":45,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":75},"wind":{"speed":4.44,"deg":253},"sys":{"pod":"d"},"dt_txt":"2020-04-25 09:00:00"},{"dt":1587816000,"main":{"temp":296.05,"feels_like":291.73,"temp_min":296.05,"temp_max":296.05,"pressure":1006,"sea_level":1006,"grnd_level":997,"humidity":36,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":5.19,"deg":265},"sys":{"pod":"d"},"dt_txt":"2020-04-25 12:00:00"},{"dt":1587826800,"main":{"temp":292.07,"feels_like":287.43,"temp_min":292.07,"temp_max":292.07,"pressure":1005,"sea_level":1005,"grnd_level":996,"humidity":54,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":65},"wind":{"speed":6.46,"deg":357},"rain":{"3h":0.15},"sys":{"pod":"d"},"dt_txt":"2020-04-25 15:00:00"},{"dt":1587837600,"main":{"temp":288.11,"feels_like":284.68,"temp_min":288.11,"temp_max":288.11,"pressure":1007,"sea_level":1007,"grnd_level":997,"humidity":60,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":57},"wind":{"speed":3.99,"deg":8},"rain":{"3h":0.1},"sys":{"pod":"n"},"dt_txt":"2020-04-25 18:00:00"},{"dt":1587848400,"main":{"temp":285.38,"feels_like":282.61,"temp_min":285.38,"temp_max":285.38,"pressure":1009,"sea_level":1009,"grnd_level":1000,"humidity":56,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":94},"wind":{"speed":1.99,"deg":325},"rain":{"3h":0.15},"sys":{"pod":"n"},"dt_txt":"2020-04-25 21:00:00"},{"dt":1587859200,"main":{"temp":282.76,"feels_like":279.59,"temp_min":282.76,"temp_max":282.76,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":75},"wind":{"speed":2.47,"deg":304},"sys":{"pod":"n"},"dt_txt":"2020-04-26 00:00:00"},{"dt":1587870000,"main":{"temp":280.69,"feels_like":278.04,"temp_min":280.69,"temp_max":280.69,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":8},"wind":{"speed":1.59,"deg":331},"sys":{"pod":"n"},"dt_txt":"2020-04-26 03:00:00"},{"dt":1587880800,"main":{"temp":284.59,"feels_like":282.43,"temp_min":284.59,"temp_max":284.59,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":60,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":27},"wind":{"speed":1.19,"deg":49},"sys":{"pod":"d"},"dt_txt":"2020-04-26 06:00:00"},{"dt":1587891600,"main":{"temp":288.03,"feels_like":285.18,"temp_min":288.03,"temp_max":288.03,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":49,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":71},"wind":{"speed":2.26,"deg":18},"sys":{"pod":"d"},"dt_txt":"2020-04-26 09:00:00"},{"dt":1587902400,"main":{"temp":286.6,"feels_like":284.14,"temp_min":286.6,"temp_max":286.6,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":62,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":85},"wind":{"speed":2.3,"deg":33},"rain":{"3h":0.51},"sys":{"pod":"d"},"dt_txt":"2020-04-26 12:00:00"},{"dt":1587913200,"main":{"temp":287.55,"feels_like":285.93,"temp_min":287.55,"temp_max":287.55,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":59,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":77},"wind":{"speed":1.16,"deg":336},"sys":{"pod":"d"},"dt_txt":"2020-04-26 15:00:00"},{"dt":1587924000,"main":{"temp":283.89,"feels_like":282.68,"temp_min":283.89,"temp_max":283.89,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":73,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":62},"wind":{"speed":0.44,"deg":360},"sys":{"pod":"n"},"dt_txt":"2020-04-26 18:00:00"},{"dt":1587934800,"main":{"temp":282.45,"feels_like":281.22,"temp_min":282.45,"temp_max":282.45,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":78,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":7},"wind":{"speed":0.35,"deg":301},"sys":{"pod":"n"},"dt_txt":"2020-04-26 21:00:00"},{"dt":1587945600,"main":{"temp":281.48,"feels_like":279.88,"temp_min":281.48,"temp_max":281.48,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":81,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":5},"wind":{"speed":0.76,"deg":93},"sys":{"pod":"n"},"dt_txt":"2020-04-27 00:00:00"},{"dt":1587956400,"main":{"temp":280.83,"feels_like":278.66,"temp_min":280.83,"temp_max":280.83,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":83,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":1},"wind":{"speed":1.48,"deg":106},"sys":{"pod":"n"},"dt_txt":"2020-04-27 03:00:00"},{"dt":1587967200,"main":{"temp":285.14,"feels_like":282.59,"temp_min":285.14,"temp_max":285.14,"pressure":1013,"sea_level":1013,"grnd_level":1004,"humidity":70,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":13},"wind":{"speed":2.54,"deg":115},"sys":{"pod":"d"},"dt_txt":"2020-04-27 06:00:00"},{"dt":1587978000,"main":{"temp":289.88,"feels_like":286.84,"temp_min":289.88,"temp_max":289.88,"pressure":1013,"sea_level":1013,"grnd_level":1004,"humidity":52,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":53},"wind":{"speed":3.29,"deg":124},"sys":{"pod":"d"},"dt_txt":"2020-04-27 09:00:00"},{"dt":1587988800,"main":{"temp":293.04,"feels_like":290.26,"temp_min":293.04,"temp_max":293.04,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":43,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":48},"wind":{"speed":2.96,"deg":108},"sys":{"pod":"d"},"dt_txt":"2020-04-27 12:00:00"},{"dt":1587999600,"main":{"temp":293.55,"feels_like":291.09,"temp_min":293.55,"temp_max":293.55,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":43,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":54},"wind":{"speed":2.65,"deg":98},"sys":{"pod":"d"},"dt_txt":"2020-04-27 15:00:00"},{"dt":1588010400,"main":{"temp":288.2,"feels_like":285.44,"temp_min":288.2,"temp_max":288.2,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":57,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":51},"wind":{"speed":2.82,"deg":93},"sys":{"pod":"n"},"dt_txt":"2020-04-27 18:00:00"},{"dt":1588021200,"main":{"temp":285.99,"feels_like":282.61,"temp_min":285.99,"temp_max":285.99,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":57,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":30},"wind":{"speed":3.09,"deg":117},"sys":{"pod":"n"},"dt_txt":"2020-04-27 21:00:00"},{"dt":1588032000,"main":{"temp":286.5,"feels_like":283.45,"temp_min":286.5,"temp_max":286.5,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":52,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":50},"wind":{"speed":2.39,"deg":121},"sys":{"pod":"n"},"dt_txt":"2020-04-28 00:00:00"},{"dt":1588042800,"main":{"temp":285.85,"feels_like":283.49,"temp_min":285.85,"temp_max":285.85,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":57,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":91},"wind":{"speed":1.59,"deg":126},"sys":{"pod":"n"},"dt_txt":"2020-04-28 03:00:00"},{"dt":1588053600,"main":{"temp":287.81,"feels_like":286.07,"temp_min":287.81,"temp_max":287.81,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":65,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":75},"wind":{"speed":1.88,"deg":178},"sys":{"pod":"d"},"dt_txt":"2020-04-28 06:00:00"},{"dt":1588064400,"main":{"temp":293.87,"feels_like":292.8,"temp_min":293.87,"temp_max":293.87,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":51,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":26},"wind":{"speed":1.67,"deg":170},"sys":{"pod":"d"},"dt_txt":"2020-04-28 09:00:00"},{"dt":1588075200,"main":{"temp":296.77,"feels_like":294.8,"temp_min":296.77,"temp_max":296.77,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":39,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":15},"wind":{"speed":2.45,"deg":190},"sys":{"pod":"d"},"dt_txt":"2020-04-28 12:00:00"},{"dt":1588086000,"main":{"temp":296.84,"feels_like":295.25,"temp_min":296.84,"temp_max":296.84,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":38,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":43},"wind":{"speed":1.79,"deg":196},"sys":{"pod":"d"},"dt_txt":"2020-04-28 15:00:00"},{"dt":1588096800,"main":{"temp":291.46,"feels_like":290.07,"temp_min":291.46,"temp_max":291.46,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":54,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":41},"wind":{"speed":1.61,"deg":149},"sys":{"pod":"n"},"dt_txt":"2020-04-28 18:00:00"},{"dt":1588107600,"main":{"temp":289.85,"feels_like":288.34,"temp_min":289.85,"temp_max":289.85,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":62,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":86},"wind":{"speed":1.99,"deg":182},"sys":{"pod":"n"},"dt_txt":"2020-04-28 21:00:00"},{"dt":1588118400,"main":{"temp":288.96,"feels_like":287.85,"temp_min":288.96,"temp_max":288.96,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":66,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":93},"wind":{"speed":1.45,"deg":196},"sys":{"pod":"n"},"dt_txt":"2020-04-29 00:00:00"},{"dt":1588129200,"main":{"temp":287.46,"feels_like":286.44,"temp_min":287.46,"temp_max":287.46,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":72,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":99},"wind":{"speed":1.27,"deg":232},"rain":{"3h":0.16},"sys":{"pod":"n"},"dt_txt":"2020-04-29 03:00:00"},{"dt":1588140000,"main":{"temp":289.54,"feels_like":288.45,"temp_min":289.54,"temp_max":289.54,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":66,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":1.63,"deg":230},"sys":{"pod":"d"},"dt_txt":"2020-04-29 06:00:00"},{"dt":1588150800,"main":{"temp":293.87,"feels_like":292.14,"temp_min":293.87,"temp_max":293.87,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":48,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":2.27,"deg":202},"sys":{"pod":"d"},"dt_txt":"2020-04-29 09:00:00"},{"dt":1588161600,"main":{"temp":296.13,"feels_like":294.07,"temp_min":296.13,"temp_max":296.13,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":41,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":2.64,"deg":183},"sys":{"pod":"d"},"dt_txt":"2020-04-29 12:00:00"},{"dt":1588172400,"main":{"temp":291.88,"feels_like":289.08,"temp_min":291.88,"temp_max":291.88,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":62,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":80},"wind":{"speed":4.59,"deg":231},"rain":{"3h":0.77},"sys":{"pod":"d"},"dt_txt":"2020-04-29 15:00:00"},{"dt":1588183200,"main":{"temp":288.73,"feels_like":287.17,"temp_min":288.73,"temp_max":288.73,"pressure":1009,"sea_level":1009,"grnd_level":1000,"humidity":71,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":66},"wind":{"speed":2.42,"deg":201},"rain":{"3h":0.35},"sys":{"pod":"n"},"dt_txt":"2020-04-29 18:00:00"}],"city":{"id":3194360,"name":"Novi Sad","coord":{"lat":45.2517,"lon":19.8369},"country":"RS","population":215400,"timezone":7200,"sunrise":1587699583,"sunset":1587749845}}')
          setData(a)
          console.log(a)
        } catch(error){
          console.log(error)
        }
      }
      getForecast()
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
          <Dashboard />
        </main>
        </div>
    )
}