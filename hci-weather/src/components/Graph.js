import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';


function CustomTooltip({ payload, label, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Time ${label} : ${property} ${payload[0].value}`}</p>
        <p className="intro">{`Date: ${payload[0].payload.date}`}</p>
        <p className="desc">{`City: ${payload[0].payload.city}`}</p>
      </div>
    );
  }

  return null;
}


const property = 'feels_like'


function createData ({dt_txt, main}, city, index) {
  console.log(main)
  let  object = {}
  const dateTime = dt_txt.split(' ')
  const date = dateTime[0]
  const time = dateTime[1].substring(0, dateTime[1].length - 3)
  object[property + index] = main[property]
  object['city' + index] = city

  return {time, date, ...object}
}



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const colors = ['#ffff00','#7e00ff', '#00ff40', '#ffbf00' ,'#000000','#ff0000','#283593']
const labels = {pressure: 'Pressure hpa', temp: 'Temperature °C', feels_like: 'Feels like °C', humidity: 'Humidity %'}

export default  function renderLineChart(props) {

  const { data, days } = props
  let chartData = []
  let dataMin = Number.MAX_VALUE
  let dataMax = Number.MIN_VALUE

  data.forEach(((forecast, index) => {
    const city = forecast.city.name + ', ' + forecast.city.country
    let countDays = -1
    let prevDate = ''
    console.log("FORECAST ", forecast)

    forecast.list.forEach(item => {
      const elData = createData(item, city, index)

      if (elData.date !== prevDate) {
        countDays += 1
        prevDate = elData.date
      }
      if (countDays <= days) {
        dataMin = elData[property + index] < dataMin ? elData[property+ index] : dataMin
        dataMax = elData[property + index] > dataMax ? elData[property + index] : dataMax
        const elExists = chartData.find(el => el.date === elData.date && el.time === elData.time )
        if (elExists) {
          elExists[property + index] = elData[property + index]
          elExists['city' + index] = elData['city' + index]
        } else {
          chartData.push(elData)
        } 
      }
    })
  }))

  console.log(property)

  return (
  <LineChart width={600} height={500} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
  { data.map((forecast, index) => {
      const color = index >= colors.length? getRandomColor() : colors[colors.length - index - 1]
      return (
        <Line type="monotone" dataKey={property + index} stroke={color} key={index}/>
      )})
  }
  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
  <XAxis dataKey="time" dy={5}>
  <Label
    value='Measurement time'
    position="insideBottomRight"
    fontSize={18}
    fill='#283593'
    align='right'
    offset={-15}
      />
  </XAxis>
  <Legend align="center" />
  <YAxis 
    dx={-5} 
    type="number"
    domain={[dataMin - 10, dataMax + 10]}
    dataKey={property}
      >
  <Label
    value={labels[property]}
    position="insideLeft"
    fontSize={18}
    fill='#283593'
    align='center'
    angle={270}
    offset={7}
      />
  </YAxis>
  <Tooltip content={<CustomTooltip />} wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
</LineChart>
  
)}