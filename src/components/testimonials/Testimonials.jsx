import React from 'react'
import Testimonials_box from './Testimonials_box'

const Testimonials = () => {
  return (
    <section className="flex flex-col d:flex-row d:h-testimonials--d gap-testimonials d:gap-testimonials--d">
      <h2 className="sr-only">Testimonials</h2>
      {[...Array(3)].map((x, index) =>
        <Testimonials_box key={index} id={index}/>
      )}
    </section>
  )
}

export default Testimonials