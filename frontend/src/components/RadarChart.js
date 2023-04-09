import React from 'react'
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, RadialLinearScale, Filler } from "chart.js";
import { Radar } from 'react-chartjs-2';

ChartJS.register = {
    LineElement, PointElement, RadialLinearScale, Tooltip, Legend, Filler
}

const RadarChart = () => {

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu'],
        datasets: [{
            label: 'Weekdays',
            data: [3, ,6, 9, 12],
            backgroundColor: 'blue'
        }]
    }

    const options = {

    }
  return (
    <div>
      <Radar 
        data={data}
        options={options}
      ></Radar>
    </div>
  )
}

export default RadarChart
