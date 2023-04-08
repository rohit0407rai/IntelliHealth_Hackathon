import React from 'react'

const Testimonial = (props) => {
    const testimonial = props.testimonial;
  return (
    <figure className="my-12 w-3/4 ">
        <blockquote className="bg-blue-500 text-white text-lg pl-14 pr-8 py-12 rounded-3xl relative shadow-sm shadow-black">
          <p>
            {testimonial.comment}
          </p>
        </blockquote>
        <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-500 dark:text-slate-400">
          &#8212;{testimonial.caption}
        </figcaption>
      </figure>
  )
}

export default Testimonial
