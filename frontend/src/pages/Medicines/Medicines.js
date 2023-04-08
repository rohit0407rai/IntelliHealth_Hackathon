import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Sidebar from '../Appointment/Sidebar'
import Imagecard from '../../components/Imagecard'
import Medicinecard from '../../components/Medicinecard'

const Medicines = () => {

  const medData = [
    {
      id: 1,
        name: "Aspirin",
        price: 5,
        content:
        "Each tablet contains 325mg of aspirin (acetylsalicylic acid) as the active ingredient.",
        companyName: "Bayer",
        rank: 4
    },
    {
      id: 2,
      name: "Ibuprofen",
      price: 8,
      content:
      "Each tablet contains 200mg of ibuprofen as the active ingredient.",
      companyName: "Advil",
      rank: 3,
    },
    {
      id: 3,
        name: "Paracetamol",
        price: 3,
        content:
        "Each tablet contains 500mg of paracetamol (acetaminophen) as the active ingredient.",
        companyName: "Tylenol",
        rank: 5,
    },
    {
      id: 3,
        name: "Paracetamol",
        price: 3,
        content:
        "Each tablet contains 500mg of paracetamol (acetaminophen) as the active ingredient.",
        companyName: "Tylenol",
        rank: 5
    },
    {
      id: 4,
        name: "Lisinopril",
        price: 12,
        content:
        "Each tablet contains 10mg of lisinopril as the active ingredient.",
        companyName: "Zestril",
        rank: 4
    },
    {
      id: 5,
        name: "Metformin",
        price: 7,
        content:
        "Each tablet contains 500mg of metformin as the active ingredient.",
        companyName: "Glucophage",
        rank: 3
    },
    {
      id: 6,
        name: "Simvastatin",
        price: 15,
        content:
        "Each tablet contains 20mg of simvastatin as the active ingredient.",
        companyName: "Zocor",
        rank: 5
    },
    {
      id: 7,
        name: "Levothyroxine",
        price: 9,
        content:
        "Each tablet contains 50mcg of levothyroxine sodium as the active ingredient.",
        companyName: "Synthroid",
        rank: 4
    },
    {
      id: 8,
        name: "Amoxicillin",
        price: 6,
        content:
        "Each capsule contains 500mg of amoxicillin trihydrate as the active ingredient.",
        companyName: "Amoxil",
        rank: 3
    },
    {
      id: 9,
        name: "Omeprazole",
        price: 10,
        content:
        "Each capsule contains 20mg of omeprazole as the active ingredient.",
        companyName: "Prilosec",
        rank: 5
    },
    {
      id: 10,
        name: "Gabapentin",
        price: 11,
        content:
        "Each capsule contains 300mg of gabapentin as the active ingredient.",
        companyName: "Neurontin",
        rank: 4
    },
    {
      id: 11,
        name: "Furosemide",
        price: 6,
        content:
        "Each tablet contains 40mg of furosemide as the active ingredient.",
        companyName: "Lasix",
        rank: 3
    },
    {
      id: 12,
        name: "Tamsulosin",
        price: 13,
        content:
        "Each capsule contains 0.4mg of tamsulosin hydrochloride as the active ingredient.",
        companyName: "Flomax",
        rank: 5
    },
    {
      id: 13,
        name: "Metoprolol",
        price: 8,
        content:
        "Each tablet contains 25mg of metoprolol tartrate as the active ingredient.",
        companyName: "Lopressor",
        rank: 4
    },
    {
      id: 14,
        name: "Atorvastatin",
        price: 18,
        content:
        "Each tablet contains 10mg of atorvastatin as the active ingredient.",
        companyName: "Lipitor",
        rank: 5
    },
    {
      id: 15,
        name: "Citalopram",
        price: 7,
        content:
        "Each tablet contains 20mg of citalopram hydrobromide as the active ingredient.",
        companyName: "Celexa",
        rank: 3
    }
  ]

  return (
    <div className='mt-12 bg-gradient-to-br from-[#e8f2fc] to-white h-[1000px] '>

      <section className='flex justify-between mx-10 pt-5'>

        <h1 className='text-3xl text-blue-500 font-semibold'>IntelliHealth</h1>  
        
        <section className='flex justify-between bg-white items-center px-5 py-2 w-1/4 rounded-full text-blue-500 hover:border-2 border-blue-300'>
            <input type="search" placeholder='Search' className='w-full bg-white focus:outline-none text-black'/>
            <button className='px-2'><BsSearch /></button>
        </section>
      </section>

      <section className='flex justify-between gap-6'>
        <Sidebar/>

        <section className='w-full flex gap-5 mt-6 flex-wrap'>
          <Medicinecard info={medData[0]}/>
          <Medicinecard info={medData[1]}/>
          <Medicinecard info={medData[2]}/>
          <Medicinecard info={medData[4]}/>
        </section>
      </section>
    </div>
  )
}

export default Medicines
