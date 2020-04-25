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
    backgroundColor: '#E8E8E8',
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
          //const { data } = await API.get(`?q=Novi+Sad&APPID=${config.API_KEY}&units=metric`)
          console.log(data)
           const a = JSON.parse('{"cod":"200","message":0,"cnt":40,"list":[{"dt":1587816000,"main":{"temp":24.83,"feels_like":20.23,"temp_min":23.35,"temp_max":24.83,"pressure":1005,"sea_level":1006,"grnd_level":996,"humidity":27,"temp_kf":1.48},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":57},"wind":{"speed":4.83,"deg":250},"sys":{"pod":"d"},"dt_txt":"2020-04-25 12:00:00"},{"dt":1587826800,"main":{"temp":20.01,"feels_like":15.91,"temp_min":19.38,"temp_max":20.01,"pressure":1005,"sea_level":1005,"grnd_level":995,"humidity":49,"temp_kf":0.63},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":47},"wind":{"speed":5.53,"deg":321},"rain":{"3h":0.26},"sys":{"pod":"d"},"dt_txt":"2020-04-25 15:00:00"},{"dt":1587837600,"main":{"temp":15.27,"feels_like":12.27,"temp_min":15.08,"temp_max":15.27,"pressure":1007,"sea_level":1007,"grnd_level":997,"humidity":64,"temp_kf":0.19},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":52},"wind":{"speed":3.8,"deg":8},"rain":{"3h":0.16},"sys":{"pod":"n"},"dt_txt":"2020-04-25 18:00:00"},{"dt":1587848400,"main":{"temp":11.63,"feels_like":8.77,"temp_min":11.61,"temp_max":11.63,"pressure":1009,"sea_level":1009,"grnd_level":999,"humidity":70,"temp_kf":0.02},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":88},"wind":{"speed":2.88,"deg":290},"rain":{"3h":0.82},"sys":{"pod":"n"},"dt_txt":"2020-04-25 21:00:00"},{"dt":1587859200,"main":{"temp":8.68,"feels_like":5.5,"temp_min":8.68,"temp_max":8.68,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":76,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":64},"wind":{"speed":2.85,"deg":297},"sys":{"pod":"n"},"dt_txt":"2020-04-26 00:00:00"},{"dt":1587870000,"main":{"temp":7.45,"feels_like":4.5,"temp_min":7.45,"temp_max":7.45,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":76,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":21},"wind":{"speed":2.2,"deg":329},"sys":{"pod":"n"},"dt_txt":"2020-04-26 03:00:00"},{"dt":1587880800,"main":{"temp":10.83,"feels_like":8.49,"temp_min":10.83,"temp_max":10.83,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":63,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":52},"wind":{"speed":1.48,"deg":356},"sys":{"pod":"d"},"dt_txt":"2020-04-26 06:00:00"},{"dt":1587891600,"main":{"temp":11.03,"feels_like":8.25,"temp_min":11.03,"temp_max":11.03,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":69,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":99},"wind":{"speed":2.53,"deg":345},"rain":{"3h":0.32},"sys":{"pod":"d"},"dt_txt":"2020-04-26 09:00:00"},{"dt":1587902400,"main":{"temp":12.01,"feels_like":10.65,"temp_min":12.01,"temp_max":12.01,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":67,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":97},"wind":{"speed":0.65,"deg":344},"rain":{"3h":0.48},"sys":{"pod":"d"},"dt_txt":"2020-04-26 12:00:00"},{"dt":1587913200,"main":{"temp":14.27,"feels_like":11.85,"temp_min":14.27,"temp_max":14.27,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":61,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":2.41,"deg":283},"sys":{"pod":"d"},"dt_txt":"2020-04-26 15:00:00"},{"dt":1587924000,"main":{"temp":10.14,"feels_like":7.77,"temp_min":10.14,"temp_max":10.14,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":81,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":70},"wind":{"speed":2.39,"deg":260},"sys":{"pod":"n"},"dt_txt":"2020-04-26 18:00:00"},{"dt":1587934800,"main":{"temp":8.42,"feels_like":6.41,"temp_min":8.42,"temp_max":8.42,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":86,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":28},"wind":{"speed":1.63,"deg":252},"sys":{"pod":"n"},"dt_txt":"2020-04-26 21:00:00"},{"dt":1587945600,"main":{"temp":7.53,"feels_like":6.22,"temp_min":7.53,"temp_max":7.53,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":86,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":15},"wind":{"speed":0.37,"deg":257},"sys":{"pod":"n"},"dt_txt":"2020-04-27 00:00:00"},{"dt":1587956400,"main":{"temp":7.08,"feels_like":4.97,"temp_min":7.08,"temp_max":7.08,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.38,"deg":99},"sys":{"pod":"n"},"dt_txt":"2020-04-27 03:00:00"},{"dt":1587967200,"main":{"temp":11.47,"feels_like":8.76,"temp_min":11.47,"temp_max":11.47,"pressure":1013,"sea_level":1013,"grnd_level":1004,"humidity":72,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.75,"deg":116},"sys":{"pod":"d"},"dt_txt":"2020-04-27 06:00:00"},{"dt":1587978000,"main":{"temp":17.12,"feels_like":13.85,"temp_min":17.12,"temp_max":17.12,"pressure":1013,"sea_level":1013,"grnd_level":1003,"humidity":51,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":8},"wind":{"speed":3.64,"deg":130},"sys":{"pod":"d"},"dt_txt":"2020-04-27 09:00:00"},{"dt":1587988800,"main":{"temp":19.85,"feels_like":17.27,"temp_min":19.85,"temp_max":19.85,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":43,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":7},"wind":{"speed":2.66,"deg":130},"sys":{"pod":"d"},"dt_txt":"2020-04-27 12:00:00"},{"dt":1587999600,"main":{"temp":20.03,"feels_like":17.99,"temp_min":20.03,"temp_max":20.03,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":45,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":68},"wind":{"speed":2.16,"deg":104},"sys":{"pod":"d"},"dt_txt":"2020-04-27 15:00:00"},{"dt":1588010400,"main":{"temp":14.94,"feels_like":12.32,"temp_min":14.94,"temp_max":14.94,"pressure":1011,"sea_level":1011,"grnd_level":1002,"humidity":58,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":62},"wind":{"speed":2.66,"deg":107},"sys":{"pod":"n"},"dt_txt":"2020-04-27 18:00:00"},{"dt":1588021200,"main":{"temp":12.58,"feels_like":9.64,"temp_min":12.58,"temp_max":12.58,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":63,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":37},"wind":{"speed":2.8,"deg":117},"sys":{"pod":"n"},"dt_txt":"2020-04-27 21:00:00"},{"dt":1588032000,"main":{"temp":11.79,"feels_like":8.88,"temp_min":11.79,"temp_max":11.79,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":61,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":44},"wind":{"speed":2.41,"deg":133},"sys":{"pod":"n"},"dt_txt":"2020-04-28 00:00:00"},{"dt":1588042800,"main":{"temp":11.76,"feels_like":9.57,"temp_min":11.76,"temp_max":11.76,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":63,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":92},"wind":{"speed":1.5,"deg":132},"sys":{"pod":"n"},"dt_txt":"2020-04-28 03:00:00"},{"dt":1588053600,"main":{"temp":14.37,"feels_like":12.68,"temp_min":14.37,"temp_max":14.37,"pressure":1012,"sea_level":1012,"grnd_level":1003,"humidity":66,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":76},"wind":{"speed":1.78,"deg":155},"sys":{"pod":"d"},"dt_txt":"2020-04-28 06:00:00"},{"dt":1588064400,"main":{"temp":20.03,"feels_like":18.7,"temp_min":20.03,"temp_max":20.03,"pressure":1012,"sea_level":1012,"grnd_level":1002,"humidity":55,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":21},"wind":{"speed":2.24,"deg":161},"sys":{"pod":"d"},"dt_txt":"2020-04-28 09:00:00"},{"dt":1588075200,"main":{"temp":23.15,"feels_like":21.47,"temp_min":23.15,"temp_max":23.15,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":42,"temp_kf":0},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"clouds":{"all":12},"wind":{"speed":2.28,"deg":206},"sys":{"pod":"d"},"dt_txt":"2020-04-28 12:00:00"},{"dt":1588086000,"main":{"temp":22.51,"feels_like":21.69,"temp_min":22.51,"temp_max":22.51,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":46,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"clouds":{"all":80},"wind":{"speed":1.35,"deg":219},"sys":{"pod":"d"},"dt_txt":"2020-04-28 15:00:00"},{"dt":1588096800,"main":{"temp":17.99,"feels_like":16.59,"temp_min":17.99,"temp_max":17.99,"pressure":1009,"sea_level":1009,"grnd_level":1000,"humidity":56,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":74},"wind":{"speed":1.72,"deg":157},"sys":{"pod":"n"},"dt_txt":"2020-04-28 18:00:00"},{"dt":1588107600,"main":{"temp":16.33,"feels_like":14.7,"temp_min":16.33,"temp_max":16.33,"pressure":1011,"sea_level":1011,"grnd_level":1001,"humidity":62,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":2.03,"deg":179},"sys":{"pod":"n"},"dt_txt":"2020-04-28 21:00:00"},{"dt":1588118400,"main":{"temp":15.06,"feels_like":14,"temp_min":15.06,"temp_max":15.06,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":69,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":1.36,"deg":204},"rain":{"3h":0.3},"sys":{"pod":"n"},"dt_txt":"2020-04-29 00:00:00"},{"dt":1588129200,"main":{"temp":14.26,"feels_like":13.71,"temp_min":14.26,"temp_max":14.26,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":76,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":0.89,"deg":226},"rain":{"3h":0.74},"sys":{"pod":"n"},"dt_txt":"2020-04-29 03:00:00"},{"dt":1588140000,"main":{"temp":16.39,"feels_like":15.66,"temp_min":16.39,"temp_max":16.39,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":70,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":99},"wind":{"speed":1.46,"deg":149},"sys":{"pod":"d"},"dt_txt":"2020-04-29 06:00:00"},{"dt":1588150800,"main":{"temp":17.85,"feels_like":16.44,"temp_min":17.85,"temp_max":17.85,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":64,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":94},"wind":{"speed":2.46,"deg":150},"sys":{"pod":"d"},"dt_txt":"2020-04-29 09:00:00"},{"dt":1588161600,"main":{"temp":22.27,"feels_like":20.06,"temp_min":22.27,"temp_max":22.27,"pressure":1008,"sea_level":1008,"grnd_level":999,"humidity":46,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":87},"wind":{"speed":3.25,"deg":155},"sys":{"pod":"d"},"dt_txt":"2020-04-29 12:00:00"},{"dt":1588172400,"main":{"temp":22.28,"feels_like":20.66,"temp_min":22.28,"temp_max":22.28,"pressure":1007,"sea_level":1007,"grnd_level":998,"humidity":48,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":{"all":100},"wind":{"speed":2.67,"deg":190},"sys":{"pod":"d"},"dt_txt":"2020-04-29 15:00:00"},{"dt":1588183200,"main":{"temp":15.61,"feels_like":11.29,"temp_min":15.61,"temp_max":15.61,"pressure":1008,"sea_level":1008,"grnd_level":998,"humidity":75,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":6.72,"deg":260},"rain":{"3h":1.2},"sys":{"pod":"n"},"dt_txt":"2020-04-29 18:00:00"},{"dt":1588194000,"main":{"temp":13.56,"feels_like":11.66,"temp_min":13.56,"temp_max":13.56,"pressure":1009,"sea_level":1009,"grnd_level":1000,"humidity":85,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":100},"wind":{"speed":3.21,"deg":260},"rain":{"3h":0.59},"sys":{"pod":"n"},"dt_txt":"2020-04-29 21:00:00"},{"dt":1588204800,"main":{"temp":12.97,"feels_like":10.8,"temp_min":12.97,"temp_max":12.97,"pressure":1009,"sea_level":1009,"grnd_level":1000,"humidity":86,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":94},"wind":{"speed":3.44,"deg":253},"sys":{"pod":"n"},"dt_txt":"2020-04-30 00:00:00"},{"dt":1588215600,"main":{"temp":11.85,"feels_like":10.11,"temp_min":11.85,"temp_max":11.85,"pressure":1010,"sea_level":1010,"grnd_level":1000,"humidity":88,"temp_kf":0},"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04n"}],"clouds":{"all":67},"wind":{"speed":2.52,"deg":261},"sys":{"pod":"n"},"dt_txt":"2020-04-30 03:00:00"},{"dt":1588226400,"main":{"temp":15.74,"feels_like":14.36,"temp_min":15.74,"temp_max":15.74,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":74,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"clouds":{"all":37},"wind":{"speed":2.48,"deg":232},"sys":{"pod":"d"},"dt_txt":"2020-04-30 06:00:00"},{"dt":1588237200,"main":{"temp":21.24,"feels_like":19.34,"temp_min":21.24,"temp_max":21.24,"pressure":1010,"sea_level":1010,"grnd_level":1001,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.94,"deg":231},"sys":{"pod":"d"},"dt_txt":"2020-04-30 09:00:00"}],"city":{"id":3194360,"name":"Novi Sad","coord":{"lat":45.2517,"lon":19.8369},"country":"RS","population":215400,"timezone":7200,"sunrise":1587785887,"sunset":1587836322}}')
          setData(a)
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
              Get weather forecast for five days
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
          <Dashboard data={data}/>
        </main>
        </div>
    )
}