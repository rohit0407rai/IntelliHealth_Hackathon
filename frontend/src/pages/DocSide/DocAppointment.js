import React from 'react'
import Header from '../../components/Header'
import DocSidebar from './DocSidebar'
import Doctorscalendar from '../Appointment/Doctorscalendar'

const DocAppointment = () => {
  return (
    <div className='bg-gradient-to-br from-[#e8f2fc] to-white h-[1000px] '>
      <Header />
      <div className='flex flex-row-reverse justify-between h-screen gap-5'>
        <Doctorscalendar/>
        <DocSidebar/>
      </div>
    </div>
  )
}

export default DocAppointment

