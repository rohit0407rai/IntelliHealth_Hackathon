import React, { useState } from 'react'
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule'
import Appointmentform from './Appointmentform';


const Doctorscalendar = () => {

    const [patientName, setPatientName] = useState('');
    const [patientDescription, setPatientDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('');

    const handleNameChange = (event) => {
        setPatientName(event.target.value);
        console.log(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        
        console.log(event.target.value)
    }
    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
        console.log(event)
    }
    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
        console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        
    }

    

    const localData: EventSettingsModel = {
        dataSource: [{
            Subject: 'Bhavya',
            Description: '',
            EndTime: new Date(2023, 3, 11, 6, 30),
            StartTime: new Date(2023, 3, 11, 4, 0)
        },
    ]
    };

    let newAppointment;

    const handleAddAppointment = (enteredAppointment) => {
      newAppointment = {
        ...enteredAppointment
      }
      localData.dataSource = [...localData.dataSource, newAppointment];
      console.log(localData.dataSource)
      
      };


  
  return (
    <div className='h-fit w-1/3 bg-white mt-5 p-5 box-border rounded-xl'>
        <div className='text-sm mb-5'>
        New Appointment
      </div>
      <Appointmentform onAddAppointment={handleAddAppointment}/>
      <div className='text-sm mb-5'>
        Appointments Calendar
      </div>
      <ScheduleComponent currentView='Month' eventSettings={localData} >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  )
}


export default Doctorscalendar
