import React from 'react'
import Rating_box from './Rating_box';

const Rating = () => {
  return (
    <section className=" flex flex-col gap-rating d:gap-rating--d mt-rating_T d:mt-rating_T--d mb-rating_B d:mb-rating_B--d w-full d:w-rating">
      {[...Array(3)].map((x, index) =>
        <Rating_box key={index} id={index}/>
      )}
    </section>
  )
}

export default Rating