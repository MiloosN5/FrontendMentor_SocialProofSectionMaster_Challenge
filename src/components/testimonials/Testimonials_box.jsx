import React from 'react'
import Anne from '../../assets/image-anne.jpg'
import Colton from '../../assets/image-colton.jpg'
import Irene from '../../assets/image-irene.jpg'

const Testimonials_box = ({id}) => {

  const desc1 = '“ We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent! ”'
  const desc2 = '“ Customer service is always excellent and very quick turn around. Completelly delighted with the simplicity of the purchase and the speed of delivery. ”'
  const desc3 = '“ Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone! ”'

  var desc = (id==0) ? desc1 : (id==1) ? desc2 : desc3;
  var place_self = (id==0) ? 'd:place-self-start' : (id==1) ? 'd:place-self-center' : 'd:place-self-end';
  var image = (id==0) ? Colton : (id==1) ? Irene : Anne;
  var name = (id==0) ? 'Colton Smith' : (id==1) ? 'Irene Roberts' : 'Anne Wallace';

  return (
    <div className={`${place_self} flex flex-col gap-testimonials__item d:gap-testimonials__item--d bg-veryDarkMagenta w-100 d:w-testimonials__item--d px-testimonials__item_X pt-testimonials__item_T pb-testimonials__item_B d:pb-testimonials__item_B--d rounded-testimonials__item`}>
      <div className="flex flex-row flex-wrap gap-testimonials__user d:gap-testimonials__user--d">
        <div>
          <img className="rounded-full w-testimonials__img h-testimonials__img" src={image}/>
        </div>
        <div className="flex flex-col gap-testimonials__info d:gap-testimonials__info--d justify-center">
          <h2 className="text-h2 d:text-h2--d font-bold tracking-testimonials__name d:tracking-testimonials__name--d leading-h2 d:leading-h2--d text-myWhite">{name}</h2>
          <p className="text-h2 d:text-h2--d font-normal tracking-testimonial__job d:tracking-testimonials__job--d leading-header__job d:leading-header__job--d text-softPink">Verified Buyer</p>
        </div>
      </div>
      <p className="font-medium text-testimonials__desc d:text-desc2--d leading-testimonials__desc tracking-testimonials__desc text-lightGrayishMagenta">
        {desc}        
      </p>
    </div>
  )
}

export default Testimonials_box
