import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page B', uv: 200, pv: 2400, amt: 2400},

{name: 'Page C', uv: 900, pv: 2400, amt: 2400}];


function createData({dt_txt, main}) {
  const { pressure } =  main
  const dateTime = dt_txt.split(' ')
  const date = dateTime[0]
  const city = ''
  const time = dateTime[1].substring(0, dateTime[1].length - 3)
  return { time, date,  pressure, city }
}



function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Time ${label} : Pressure ${payload[0].value}`}</p>
        <p className="intro">{`Date: ${payload[0].payload.date}`}</p>
        <p className="desc">{`City: ${payload[0].payload.city}`}</p>
      </div>
    );
  }

  return null;
}




export default  function renderLineChart(props) {

  const { data, days } = props
  const oneCity = data[0]
  const dataN = []
  let prevDate = ''
  let countPassedDays = -1
  let dataMin = Number.MAX_VALUE
  let dataMax = Number.MIN_VALUE


  oneCity.list.forEach((el, index) => {  
    if (el) {
      let currDate = el.dt_txt.split(' ')[0]
      if (currDate != prevDate) {
        countPassedDays += 1
        prevDate = currDate
      }
      
      if (countPassedDays <= days) {
        const elData = createData(el)
        if (elData.pressure < dataMin )
          dataMin = elData.pressure
        else if (elData.pressure > dataMax) {
          dataMax = elData.pressure
        }
        console.log(elData)
        dataN.push(elData)
      }
      }
    })
  return (
  <LineChart width={600} height={500} data={dataN} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="pressure" stroke="#283593" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="time" dy={5}>
    <Label
      value='Measurement time'
      position="insideBottomRight"
      margintTop={100}
      fontSize={18}
      fill='#283593'
      align='right'
        />
    </XAxis>
    <Legend align="center" />
    <YAxis dx={-5} type="number" domain={[dataMin - 5, dataMax + 5]}/>
    <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
  </LineChart>
  
)}