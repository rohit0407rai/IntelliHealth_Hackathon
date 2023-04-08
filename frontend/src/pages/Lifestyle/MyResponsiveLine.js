import {Line} from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement} from 'chart.js';
import { useState } from 'react';

ChartJS.register(Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement)


const MyResponsiveLine = () => {
  const [data, setData] = useState({
    labels: ["18-24", '25-44', '45-64', '65-74', '75-84', '>84'],
    datasets: [
      {
        label: "Asthama",
        data: [14, 10, 8, 7, 6, 4],
        borderColor: 'yellow', 
        fill: true
      },
      {
        label: "Heart Disease",
        data: [5, 14, 13, 25, 35, 37],
        borderColor: 'Red'
      },
      {
        label: "Arthritis",
        data: [7, 13, 26, 33, 37, 43],
        borderColor: 'orange'
      },
      {
        label: "Cancer",
        data: [1, 3, 5, 16, 23, 21],
        borderColor: 'Green'
      }, 
      {
        label: "Diabetes",
        data: [1, 2, 7, 16, 17, 16],
        borderColor: 'blue', 
        
      }
      
    ]
  })
  
  return (
    <div>
      <Line data={data}></Line>
    </div>
    
  )
  
}

export default MyResponsiveLine