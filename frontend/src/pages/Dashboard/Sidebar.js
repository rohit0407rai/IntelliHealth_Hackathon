import React from 'react'
import { BiHome } from 'react-icons/bi'
import { SlNotebook } from 'react-icons/sl'
import { IoPeopleOutline } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='w-1/6 mt-5 h-[900px] rounded-xl bg-white box-border px-5 py-5'>
        <div className='text-sm'>
            Menu
        </div>
        <ul >
            <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                <BiHome className='w-5 h-5 '/>
                <p className='text-lg '><button>Dashboard</button></p>
            </li>
            <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                <SlNotebook className='w-5 h-5'/>
                <p className='text-lg'><button>Blogs</button></p>
            </li>
            <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                <IoPeopleOutline className='w-5 h-5'/>
                <p className='text-lg'><button>Patients</button></p>
            </li>
            
        </ul>
    </div>
  )
}

export default Sidebar
