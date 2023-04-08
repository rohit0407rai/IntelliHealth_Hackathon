import React from 'react'
import { BiHome, BiCalendar } from 'react-icons/bi'
import { SlNotebook } from 'react-icons/sl'
import { IoPeopleOutline } from 'react-icons/io5'
import { GiLifeInTheBalance } from 'react-icons/gi'
import { GiMedicines } from 'react-icons/gi'
import { FaStethoscope} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    const handleHide = () => {
        console.log()
    }
    return (
        <div className=' w-1/6 mt-5 h-screen rounded-xl bg-white box-border px-5 py-5 ml-2' onClick={handleHide}>
            <div className='text-sm'>
                Menu
            </div>
            <ul >
            <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <BiHome className='w-5 h-5 ' />
                    <p className='text-lg '>
                        <button>
                            <Link to='/'>Home</Link>
                            </button>
                            </p>
                </li>
                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <BiCalendar className='w-5 h-5 ' />
                    <p className='text-lg '>
                        <button>
                            <Link to='/appointment'>Appointment</Link>
                            </button>
                            </p>
                </li>
                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <SlNotebook className='w-5 h-5' />
                    <p className='text-lg'>
                        <button>
                            <Link to='/blogs'>Blogs</Link>
                        </button>
                    </p>
                </li>
                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <IoPeopleOutline className='w-5 h-5' />
                    <p className='text-lg'><button>
                        <Link to='/lifestyle'>
                            My details
                        </Link>
                    </button></p>
                </li>

                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <GiLifeInTheBalance className='w-5 h-5' />
                    <p className='text-lg'><button><Link to='/lifestyle'>
                            Lifestyle
                        </Link></button></p>
                </li>

                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <GiMedicines className='w-5 h-5' />
                    <p className='text-lg'><button><Link to='/medicines'>
                            Medicines
                        </Link></button></p>
                </li>
                <li className='flex items-center justify-start mt-5 gap-5 hover:text-blue-400'>
                    <FaStethoscope className='w-5 h-5' />
                    <p className='text-lg'><button><Link to='/doctors'>
                           Doctors
                        </Link></button></p>
                </li>

            </ul>
        </div>
    )
}

export default Sidebar
