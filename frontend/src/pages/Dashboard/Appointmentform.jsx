import React, { useState } from 'react'


const Appointmentform = (props) => {

    const [data, setData] = useState(props.data);
    

    const [patientName, setPatientName] = useState('');
    const [patientDescription, setPatientDescription] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('');

    const handleNameChange = (event) => {
        setPatientName(event.target.value);
        
    }
    const handleDescriptionChange = (event) => {
        setPatientDescription(event.target.value)
        
    }
    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
        
    }
    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAppointment = {
            Subject: patientName,
            Description: patientDescription,
            StartTime: startTime,
            EndTime: endTime
        }
        console.log(newAppointment)
        // const newData = [...data , newAppointment]
        // setData(newData);
        
        setPatientName('')
        setPatientDescription('')
        setStartTime('')
        setEndTime('')



        
    }
    

  return (
    <form action="action.php" onSubmit={handleSubmit}>
        <label htmlFor="patientName" className='block mb-1 text-md text-[#05060f99]'>Patient Name</label>
        <input type="text" value={patientName} onChange={handleNameChange}   className='max-w-xs h-7 mb-4 bg-[#05060f0a] rounded-lg px-4 ring-offset-1 ring-transparent'/> <br />

        <div className='flex gap-3'>
            <div className=''>
                <label htmlFor="startTime" className='block mb-1 text-md text-[#05060f99]'>Start Time</label>
                <input type="datetime-local" value={startTime} onChange={handleStartTimeChange} className=' h-7  bg-[#05060f0a] rounded-lg px-4 ring-offset-1 ring-transparent'/> <br />
            </div>
            <div className=''>
                <label htmlFor="endTime" className='block mb-1 text-md text-[#05060f99]'>End Time</label>
                <input type="datetime-local" value={endTime} onChange={handleEndTimeChange} className=' h-7  bg-[#05060f0a] rounded-lg px-4 ring-offset-1 ring-transparent'/> <br />
            </div>
        </div>
        
        <label htmlFor="patientDescription" className='block mt-4 text-md text-[#05060f99]'>Description</label>
        <textarea name="" id="" cols="50" rows="2" value={patientDescription} onChange={handleDescriptionChange} className='mt-2 mb-2 bg-[#05060f0a] rounded-lg p-2 ring-offset-1 ring-transparent'></textarea> <br />

        <button type='submit' className='mt-2 mb-6 px-4 py-1 bg-blue-500 text-white'>Schedule Appointment</button>
      </form>
  )
}

export default Appointmentform
