import React from 'react'
import { BsBellFill } from 'react-icons/bs'
import profile from '../images/profile.jpg'

const Hearder = () => {
  const Username = 'Jamie'
  return (
    <div className=' top-10 z-10 text-black px-10 py-5 flex justify-between items-center mt-10 '>
      <div className='font-semibold text-3xl text-blue-500'>
        IntelliHealth
      </div>
      <div className='flex items-center'>
        <BsBellFill className='mr-6'/>
        <button><img src={profile} alt="" className='w-10 h-10 rounded-full mr-2'/></button>
        <p>{Username}</p>
      </div>
      
    </div>
  )
}

export default Hearder
