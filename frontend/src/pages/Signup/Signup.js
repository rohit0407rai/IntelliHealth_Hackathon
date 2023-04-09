import React from 'react'
import { Link } from 'react-router-dom'

const signup = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <button className='w-1/2 border-r-[1px] border-white h-screen bg-blue-500 text-4xl text-white'><Link to='/home'>Patient</Link></button>
      <button className='w-1/2 border-l-[1px] border-white h-screen bg-green-500 text-4xl text-white'><Link to='/dashboard'>Doctor</Link></button>
    </div>
  )
}

export default signup
