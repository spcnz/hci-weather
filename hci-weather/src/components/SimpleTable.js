import React from "react";
import PropTypes from "prop-types";
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TableContainer from '@material-ui/core/TableContainer';


class ExpandingRow extends React.Component {
  state = { open: false };

  render() {
    const { row } = this.props;
    const { hourly } = row;
    const { open } = this.state;

    return (
      <>
        <TableRow key={row.id}>
          <TableCell component="th" >
              {row.date}
          </TableCell>
          <TableCell align="right" >{row.time}</TableCell>
          <TableCell align="right">{row.curr}</TableCell>
          <TableCell align="right">{row.min}</TableCell>
          <TableCell align="right">{row.max}</TableCell>
          <TableCell align="right">{row.pressure}</TableCell>
          <TableCell align="right">{row.humidity}</TableCell>
          <TableCell align="right">{row.feelsLike}</TableCell>
          <TableCell align="center"> 
            <IconButton aria-label="delete" onClick={() => this.setState(({ open }) => ({ open: !open }))}>
                <ExpandMoreIcon />
            </IconButton>
          </TableCell>
        </TableRow>
        {hourly.map(el => (
            <TableRow key={el.time}>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}></Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.time}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.curr}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.min}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.max}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.pressure}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.humidity}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}>{el.feelsLike}</Collapse>
              </TableCell>
              <TableCell style={open? {padding: 10} : {padding: 0}} align="right">
                <Collapse in={open}></Collapse>
              </TableCell>
            </TableRow>
        
          ))}
      </>
    );
  }
}

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 400,
  },
  tableHeader: {
    backgroundColor: '#283593',
    height: '10px'
  },
  tableHeaderCell : {
    fontWeight: 'bold',
    color: 'white'
  },
  title: {
    flex: '1 1 100%',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#283593'
  },
  toolBar: {
    heigh: '10px'
  }
});

let id = 0;

function SimpleTable(props) {
  const { classes, data, days } = props;
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(days + 1 || 1);

  const list = data[page] ? data[page].list: []
  const name = data[page] ? data[page].city.name + ', ' + data[page].city.country: ''
  let rows = []
  let prevDate = ''

  function createData({dt_txt, main }, id, hourly) {
    const { temp: curr, temp_min: min, temp_max: max,pressure,humidity, feels_like: feelsLike } = main
    const dateTime = dt_txt.split(' ')
    const date = dateTime[0]
    const time = dateTime[1].substring(0, dateTime[1].length - 3)
    return { id, date, time, curr, min, max, pressure, humidity, feelsLike, hourly }
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
 
  list.forEach((el, index) => {  
    if (el) {
      let currDate = el.dt_txt.split(' ')[0]
      if (currDate !== prevDate) {
        prevDate = currDate
        let hourly = []
        for (let i = index + 1; i < list.length ; i++) {
          let date = list[i].dt_txt.split(' ')[0]      
          if (currDate === date)
            hourly.push(createData(list[i], i, []))
        }
        const rowData = createData(el, index, hourly)
        rows.push(rowData)
      }
    }
  
  })

  return (
    <Paper className={classes.root} elevation={3}>
      <Toolbar className={classes.toolBar}>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {name}
        </Typography>
      </Toolbar>
    <TableContainer>
      <Table className={classes.table}>
        <TableHead className={classes.tableHeader}>
          <TableRow>
            <TableCell align="center" className= {classes.tableHeaderCell}>Date</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Time</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Current temp (C)</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Min temp (C)</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Max temp (C)</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Pressure (hpa)</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Humidity (%)</TableCell>
            <TableCell align="right" className= {classes.tableHeaderCell}>Feels like (C)</TableCell>
            <TableCell align="left" className= {classes.tableHeaderCell}>Hourly forecast</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <ExpandingRow row={row} key={row.id}/>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length * rowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          nextIconButtonText="Next city"	
          backIconButtonText="Previous city"
        />
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  days: PropTypes.number.isRequired
};

export default withStyles(styles)(SimpleTable);