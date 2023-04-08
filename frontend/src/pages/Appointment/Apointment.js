import React from 'react'
import Header from '../../components/Header'
import Sidebar from './Sidebar'
import Doctorscalendar from './Doctorscalendar'

const Dashboard = () => {
  return (
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white h-[1000px] '>
      <Header />
      <div className='flex flex-row-reverse justify-between h-screen gap-5'>
        <Doctorscalendar/>
        <Sidebar/>
      </div>
    </div>
  )
}

export default Dashboard
