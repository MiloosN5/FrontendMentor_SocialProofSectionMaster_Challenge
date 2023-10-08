import React from 'react'
import Testimonials_box from './Testimonials_box'

const Testimonials = () => {
  return (
    <div className="flex flex-col d:flex-row d:h-testimonials--d gap-testimonials d:gap-testimonials--d">
      {[...Array(3)].map((x, index) =>
        <Testimonials_box key={index} id={index}/>
      )}
    </div>
  )
}

export default Testimonials