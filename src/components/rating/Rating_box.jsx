import React, {useEffect} from 'react'
import Star from '../Icons/Star/Star'

const Rating_box = ({title, id}) => {

  var title = (id==0) ? 'Rated 5 Stars in Reviews' : (id==1) ? 'Rated 5 Stars in Report Guru' : 'Rated 5 Stars in BestTech';
  var place_self = (id==0) ? 'd:place-self-start' : (id==1) ? 'd:place-self-center' : 'd:place-self-end';
  
  return (
    <div id={id} className={`flex flex-col gap-rating__item d:gap-rating__item--d items-center bg-lightGrayishMagenta rounded-rating__item  py-rating__item_Y d:py-rating__item_Y--d d:ps-8 d:w-rating__item d:flex-row ${place_self}`}>
      <div className="flex flex-row gap-rating__star d:gap-rating__star--d">
        
      {[...Array(5)].map((x, index) =>
        <Star key={index} />
      )}
        
      </div>
      <h2 className="font-bold text-h2 text-center d:text-h2--d leading-h2 d:leading-h2--d d:tracking-rating__title--d text-veryDarkMagenta">{title}</h2>
    </div>
  )
}

export default Rating_box
