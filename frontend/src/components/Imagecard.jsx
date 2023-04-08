import React from 'react';


const Imagecard = (props) => {
  const info = props.info;
  return (
    <li
          class="w-3/5 h-1/2 sm:w-5/6 items-center flex flex-col hover:border hover:border-solid hover:border-slate-900 bg-white py-6 px-2 rounded-3xl hover:shadow-xl">

          <img class="w-full h-3/4 px-5 mb-3" src={info.image} alt="Error loading" />
          <h3 class="text-md text-center text-slate-500">
            {info.title}
          </h3>
          {/* <p class="hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400">
            $
          </p> */}
          <p class=" text-center text-lg text-black">
            {info.desc}
          </p>
    </li>
  )
}

export default Imagecard
