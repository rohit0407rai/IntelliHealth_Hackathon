import React from 'react'
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"
import { Link } from 'react-router-dom'

const Medicinecard = (props) => {
    const info = props.info
  return (
    <li
          className="w-1/5 h-1/4 items-center flex flex-col hover:border hover:border-solid hover:border-slate-900 bg-white py-6 px-2 rounded-3xl hover:shadow-xl">

          <img class="w-full h-3/4 px-5 mb-3" src={info.image} alt="Error loading" />
          <div className='flex justify-between w-full'>
            <h3 className="text-xl font-semibold text-left w-full text-black">
                {info.name}
            </h3>
            <p className='text-left text '>&#8360;&nbsp;{info.price}</p>
          </div>
          {/* <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
            $
          </p> */}
          <p className=" mt-3 text-left text-md text-gray-600">
            {info.content}
          </p>
          <button className='bg-blue-500 text-white px-3 py-1 mt-3'><Link to='/payment'>Buy Now</Link></button>
          
    </li>
  )
}

export default Medicinecard
