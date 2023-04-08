import React from 'react'

const Servicescard = (props) => {
    const service = props.service;
  return (
    <div className='w-1/4 px-4 py-4 h-[300px]'>
        <img src={service.image} alt="" />
        <article className='px-5 mb-2 rounded-md text-black text-xl font-semibold text-center flex items-center justify-center'>
            {service.title}
        </article>
        <figcaption className='text-sm text-black text-center'>
            {service.caption}
        </figcaption>
        {/* <button className='flex text-center w-full'>Learn More &rarr;</button> */}
    </div>
  )
}

export default Servicescard
