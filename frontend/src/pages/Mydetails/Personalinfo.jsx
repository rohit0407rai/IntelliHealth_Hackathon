import React from 'react'
import profile from '../../images/profile.jpg'

const Personalinfo = () => {
    const firstName = 'Jamie';
    const lastName = 'Cooper';
    const age = 22;
    const gender = 'Female'
    const contact = 9653170445;
    const email = 'jamie@gmail.com'
    const address = '2381 Heavens Way, Irvine, CA, California'
    const allergies = 'none'
  return (
    <div className='w-full px-5'>
        <div className='flex flex-wrap items-center justify-center gap-8'>
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
                <p className='text-2xl'>Gender</p> <br />
                <p className='text-2xl text-blue-500'>{gender}&nbsp;&nbsp;&#9792;</p>
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

export default Personalinfo
