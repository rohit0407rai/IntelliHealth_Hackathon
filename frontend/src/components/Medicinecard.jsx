import React from 'react'

const Medicinecard = (props) => {
    const info = props.info
  return (
    <li
          className="w-1/5 h-1/2 items-center flex flex-col border border-solid border-slate-900 bg-white py-6 px-2 rounded-3xl shadow-xl">

          {/* <img class="w-full h-3/4 px-5 mb-3" src={info.image} alt="Error loading" /> */}
          <h3 className="text-xl font-semibold text-left w-full text-black">
            {info.name}
          </h3>
          {/* <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
            $
          </p> */}
          <p className=" mt-3 text-left text-md text-gray-600">
            {info.content}
          </p>
          <p className='text-left'>Price&nbsp;&nbsp;&nbsp;&#8360;&nbsp;{info.price}</p>
    </li>
  )
}

export default Medicinecard
