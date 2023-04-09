import React from 'react'
import {RiArrowDropDownLine} from 'react-icons/ri'

const Dropdown = () => {
    const drop_data =[
        {
            name: "Disease 1",
            link: "" ,
            function:''
        },
        {
            name: "Disease2",
            link:"",
            function: ''
        },
        {
            name: "Disease3",
            link:"",
            function: ''
        },
        {
            name: "Disease4",
            link:"",
            function: ''
        },
        {
            name: "Disease5",
            link:"",
            function: ''
        },
        {
            name: "Disease6",
            link:"",
            function: ''
        },
    ]


  return (
    <div className="relative group inline z-10">

        <button className="flex w-auto font-bold md:w-auto md:inline md:mt-0 text-gray-600 text-sm cursor-pointer items-center justify center  ">
            <span className='flex items-center justify-center  '><RiArrowDropDownLine className='mx-5'/></span>
        </button>

        <div className="absolute rounded-2xl  hidden group-hover:block group-hover:-mx-0">   
            <div className="  bg-white shadow-lg rounded-2xl   w-28 ">

            {drop_data.map(data => (
            <div className="px-4 text-gray-600 hover:rounded-xl hover:bg-[#E0DDCA] font-bold text-sm py-4  cursor-pointer">
                <button onClick={data.function}>{data.name}</button>
            </div>
            ))}
         
            

            </div>
        </div>

    </div>
  )
}

export default Dropdown
