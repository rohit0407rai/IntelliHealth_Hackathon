import React from 'react'
import {Chart as ChartJS, ArcElement, CategoryScale, LinearScale,  Tooltip, Legend} from 'chart.js'
import { Bar } from 'react-chartjs-2';

ChartJS.register (
    ArcElement, CategoryScale, LinearScale,  Tooltip, Legend
)
const BarChartMedicine = () => {
    const data = {
        labels: ['Rantac', 'Crocin', 'Pan-40','Aspirin', 'Ibuprofen', 'Paracetamol', 'Lisinopril' ],
        datasets: [{
            label: 'Drug',
            data: [30, 13, 45, 23, 54, 21, 44],
            backgroundColor: ['blue', 'aqua', 'royalblue', 'blue', 'aqua', 'royalblue', 'blue']
        }]
    }

    const options ={

    }

  return (
    <div>
      <Bar
        data={data}
        options={options}
        height={200}
      ></Bar>
    </div>
  )
}

export default BarChartMedicine
