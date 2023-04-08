import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ImageCard from '../../components/Imagecard'
import Sidebar from '../Appointment/Sidebar'
import hero1 from '../../images/PIC1.png'
import Appointment from '../Appointment/Apointment'
import Servicescard from '../../components/Servicescard'
import Testimonial from '../../components/Testimonial'


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
            desc: 'Learning Disability'
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

    const medInfo = [
        {
            image: 'https://www.shutterstock.com/image-illustration/generika-medical-pill-box-blue-600w-115747942.jpg',
            title: 'Generica 500mg',
        },
        {
            image: 'https://www.shutterstock.com/image-illustration/open-medicine-packet-labelled-solution-600w-92676139.jpg',
            title: 'Solution 500mg',
        },
        {
            image: 'https://www.shutterstock.com/image-illustration/generika-medical-pill-box-blue-600w-115747942.jpg',
            title: 'Generica 500mg',
        },
        {
            image: 'https://www.shutterstock.com/image-illustration/open-medicine-packet-labelled-solution-600w-92676139.jpg',
            title: 'Solution 500mg',
        },
        {
            image: 'https://www.shutterstock.com/image-illustration/generika-medical-pill-box-blue-600w-115747942.jpg',
            title: 'Generica 500mg',
        },
        
    ]

    const ourServices = [
        {
            image: 'https://cdn-icons-png.flaticon.com/256/9284/9284047.png',
            title: 'Disease',
            caption: 'Diagnosing and treating common illnesses and medical conditions'
        },
        {
            image: 'https://cdn-icons-png.flaticon.com/512/4497/4497819.png',
            title: 'Medicines',
            caption: 'Prescribing medications and refilling prescriptions'
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/6717/6717561.png",
            title: 'Reliable Advice',
            caption: 'Providing medical advice and guidance on lifestyle changes and disease prevention'
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/6811/6811265.png",
            title: 'One-One',
            caption: 'Providing mental health counseling and therapy'
        },
        {
            image: "https://cdn-icons-png.flaticon.com/512/6197/6197442.png",
            title: 'Family care',
            caption: 'Providing healthcare support and guidance to patients and their families.'
        },
    ]

    const testimonialInfo = [
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum laborum labore! Sit, fugiat. Maxime ducimus autem consequatur consectetur nam numquam voluptas vel velit voluptate, dolore officia minima laborum totam!',
            caption: 'Vinaya Sawant, Neurologist'
        },
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum laborum labore! Sit, fugiat. Maxime ducimus autem consequatur consectetur nam numquam voluptas vel velit voluptate, dolore officia minima laborum totam!',
            caption: 'Abhijeet Joshi, Oncologist'
        },
        {
            comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente eum laborum labore! Sit, fugiat. Maxime ducimus autem consequatur consectetur nam numquam voluptas vel velit voluptate, dolore officia minima laborum totam!',
            caption: 'Stevina Corrihea, Cardiologist'
        },
    ]
    
  return (
    <div className='mt-12 bg-gradient-to-br from-[#e8f2fc] to-white h-[3000px]'>
      
      
      <section className='flex justify-between mx-10 pt-5'>
        <h1 className='text-3xl text-blue-500 font-semibold'>IntelliHealth</h1>  
        
      <section className='flex justify-between bg-white items-center px-5 py-2 w-1/4 rounded-full text-blue-500 hover:border-2 border-blue-300'>
          <input type="search" placeholder='Search' className='w-full bg-white focus:outline-none text-black'/>
          <button className='px-2'><BsSearch /></button>
        </section>
        <p></p>
      </section>


      <section className='flex justify-between items-center gap-5 mr-5'>
        <Sidebar/>

        <div className='w-full h-screen py-5'>
            <section id="hero" className='bg-blue-500 mx-32 flex justify-between items-center pl-5 rounded-xl mb-8'>
                <div>
                    <h1 className='text-white text-5xl font-bold'>Find Health at Home with IntelliHealth</h1>
                    <p className='mt-3 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <button className='mt-6 px-5 py-2 w-36 rounded-xl bg-white text-blue-500  hover:text-blue-500'><Link to='appointment'>Consult Now</Link></button>
                </div>
                <img src={hero1}  className='w-6/12'/>
            </section>

            <section className='w-full py-5'>
                <div className='text-3xl text-blue-500 font-semibold w-3/4'>Expert medical advice for any health issue by consulting with leading doctors online.</div>
                    <div className='flex gap-5 py-10 items-start '>
                    <Servicescard service= {ourServices[0]}/>
                    <Servicescard service= {ourServices[1]}/>
                    <Servicescard service= {ourServices[2]}/>
                    <Servicescard service= {ourServices[3]}/>
                    <Servicescard service= {ourServices[4]}/>
                    
                    </div> 
            </section>

            <section className='w-full py-5'>
                <div className='flex justify-between items-end'>
                    <div className='text-3xl text-blue-500 font-semibold'>Our Doctors</div>
                    <p className='text-blue-500'><Link to='doctors'>See more</Link></p>
                </div>
                    <div className='flex gap-5 py-10 items-start '>
                    <ImageCard info={doctorInfo[0]}/>
                    <ImageCard info={doctorInfo[1]}/>
                    <ImageCard info={doctorInfo[2]}/>
                    <ImageCard info={doctorInfo[3]}/>
                    <ImageCard info={doctorInfo[4]}/>
                    </div> 
            </section>

            <section className='w-full py-5'>
                <div className='flex items-end justify-between'>
                    <div className='text-3xl text-blue-500 font-semibold'>Find Medicines</div>
                    <p className='text-blue-500'><Link to='medicines'>See more</Link></p>
                </div>
                    <div className='flex gap-5 py-10 items-start '>
                    <ImageCard info={medInfo[0]}/>
                    <ImageCard info={medInfo[1]}/>
                    <ImageCard info={medInfo[2]}/>
                    <ImageCard info={medInfo[3]}/>
                    <ImageCard info={medInfo[4]}/>
                    </div> 
            </section>
            
            <section id='testimonial' className='w-full py-5'>
                <h1 className='text-3xl text-blue-500 font-semibold'>Testimonials of various Doctors</h1>
                <Testimonial testimonial = {testimonialInfo[0]}/>    
                <Testimonial testimonial = {testimonialInfo[1]}/>    
                <Testimonial testimonial = {testimonialInfo[2]}/>    
            </section>

        </div>
      </section>
    </div>
  )
}

export default Home
