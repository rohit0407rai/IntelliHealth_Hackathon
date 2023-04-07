import React from 'react'
import { BsSearch } from 'react-icons/bs'
import ImageCard from '../../components/Imagecard'
import Sidebar from '../Appointment/Sidebar'

const Home = () => {

    const doctorInfo = [
        {
            image: 'https://images.freeimages.com/images/large-previews/711/medical-doctor-1236694.jpg',
            title: 'Prachi Tawde',
            desc: 'Chiropractor'
        },
        {
            image: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Sharvari Patil',
            desc: 'Compounder'
        },
        {
            image: 'https://images.pexels.com/photos/7578806/pexels-photo-7578806.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
            title: 'Neha Katre',
            desc: 'Cardiologist'
        },
        {
            image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Harshal Dalvi',
            desc: 'Nutritionist'
        },
        {
            image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Richa Sharma',
            desc: 'Pediatrician'
        },
    ]

    console.log(doctorInfo[0])
  return (
    <div className='mt-12 bg-gradient-to-br from-[#e8f2fc] to-white '>
      
      
      <section className='flex justify-between mx-10 pt-5'>
        <h1 className='text-3xl text-blue-500 font-semibold'>IntelliHealth</h1>  
        
      <section className='flex justify-between bg-white items-center px-5 py-2 w-1/4 rounded-full text-blue-500 hover:border-2 border-blue-300'>
          <input type="search" placeholder='Search' className='w-full bg-white focus:outline-none text-black'/>
          <button className='px-2'><BsSearch /></button>
        </section>
      </section>


      <section className='flex justify-between items-center gap-5 mr-5'>
        <Sidebar/>
        <div className='w-full h-screen py-5'>
            <div className='text-3xl text-blue-500 font-semibold'>Our Doctors</div>
            <div className='flex    gap-5 py-10 items-start '>
            <ImageCard info={doctorInfo[0]}/>
            <ImageCard info={doctorInfo[1]}/>
            <ImageCard info={doctorInfo[2]}/>
            <ImageCard info={doctorInfo[3]}/>
            <ImageCard info={doctorInfo[4]}/>
            </div> 
        </div>
      </section>
    </div>
  )
}

export default Home
