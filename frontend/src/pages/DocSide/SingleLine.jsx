import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { useState } from 'react';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement)


const MyResponsiveLine = () => {
  const [data, setData] = useState({
    labels: ["Mon", 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: "patients",
        data: [14, 10, 8, 7, 6, 4, 20],
        borderColor: 'yellow', 
        fill: true
      },
    ]
  })
  
  return (
    <div className=''>
      <Line data={data} height={200}></Line>
    </div>
    
  )
  
}

export default MyResponsiveLine