import React from 'react'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register (
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const Barchart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [3, 6, 9, 23, 34, 43, 45, 0, 0, 0, 0, 0],
                backgroundColor: 'blue',
            }
        ]
    }

    // const options = 

  return (
    <div>
      <Bar 
        data={data}
        height={200}
        // options={options}
      ></Bar>
    </div>
  )
}

export default Barchart
