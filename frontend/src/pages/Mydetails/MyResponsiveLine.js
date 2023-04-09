import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { useState } from 'react';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement)


const MyResponsiveLine = () => {
  const [data, setData] = useState({
    labels: ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: "Asthama",
        data: [14, 10, 8, 7, 6, 4, 8, 23, 12, 9, 1, 5],
        borderColor: 'yellow', 
        fill: true
      },
      {
        label: "Heart Disease",
        data: [5, 14, 13, 25, 35, 37, 25, 12, 18, 5, 12],
        borderColor: 'Red'
      },
      {
        label: "Arthritis",
        data: [7, 13, 26, 33, 37, 43, 30, 23, 43, 12, 22],
        borderColor: 'orange'
      },
      {
        label: "Cancer",
        data: [1, 3, 5, 16, 23, 21, 54, 24, 15, 63, 30, 9],
        borderColor: 'Green'
      }, 
      
    ]
  })
  
  return (
    <div className=''>
      <Line data={data} height={200} className='border-2 border-black'></Line>
    </div>
    
  )
  
}

export default MyResponsiveLine