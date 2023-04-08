import React from 'react'
import Header from '../../components/Header'
import Sidebar from './Sidebar'
import Doctorscalendar from './Doctorscalendar'
const Dashboard = () => {
  return (
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white h-screen w-full'>
    <Header />
    <Sidebar/>
    
  </div>
  )
}

export default Dashboard



// const Dashboard = () => {
//   function LiveCard() {
//     const [inputValue, setInputValue] = useState('');
  
//     function moveAhead() {
//       if (inputValue === 'A') {
//         console.log('Moved ahead for input value A');
//       } else if (inputValue === 'B') {
//         console.log('Moved ahead for input value B');
//       } else {
//         console.log('Invalid input value');
//       }
//     }
  