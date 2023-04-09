import React from 'react'
import profile from '../../images/profile.jpg'
import DocSidebar from './DocSidebar';

const DoctorInfo = () => {
    const firstName = 'Jamie';
    const lastName = 'Cooper';
    const age = 22;
    const reg_id = '90SJN445KDJW';
    const contact = 9653170445;
    const email = 'jamie@gmail.com'
    const linkedin = 'http:/doctor@linked.com'
    const address = '2381 Heavens Way, Irvine, CA, California'
    const allergies = 'none'
    const special = 'Neurologist'
  return (
    <div className='w-full px-5 flex bg-gradient-to-br from-[#e8f2fc] to-white'>
        <DocSidebar/>
        <div className='flex flex-wrap items-center justify-center gap-8 w-full px-10'>
            <img src={profile} alt="" className='w-1/4 rounded-full'/>
            
            <div className='w-1/4'>
                <p className='text-2xl'>First name</p> <br />
                <p className='text-2xl text-blue-500'>{firstName}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/4'>
                <p className='text-2xl'>Last name</p> <br />
                <p className='text-2xl text-blue-500'>{lastName}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Age</p> <br />
                <p className='text-2xl text-blue-500'>{age}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Registration id</p> <br />
                <p className='text-2xl text-blue-500'>{reg_id}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Contact</p> <br />
                <p className='text-2xl text-blue-500'>{contact}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Email</p> <br />
                <p className='text-2xl text-blue-500'>{email}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Qualification</p> <br />
                <p className='text-2xl text-blue-500'>{linkedin}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-1/3'>
                <p className='text-2xl'>Specialization</p> <br />
                <p className='text-2xl text-blue-500'>{special}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-full'>
                <p className='text-2xl'>Address</p> <br />
                <p className='text-2xl text-blue-500'>{address}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>
            <div className='w-full'>
                <p className='text-2xl'>Allergies</p> <br />
                <p className='text-2xl text-blue-500'>{allergies}</p>
                <hr className='bg-black border-[1px] border-gray-300 w-full'/>
            </div>


        </div>
    </div>
  )
}

export default DoctorInfo
