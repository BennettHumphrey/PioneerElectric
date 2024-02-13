import React from 'react'
import { reviews } from '../resources/data';
import Carousel from './Carousel/Carousel';
import reviewStyles from './Carousel/ReviewCarousel.module.css';
import ReviewsButton from './ReviewsButton';


const Reviews = () => {

  const carouselOptions = {
    autoplay: true,
    autoplayDelay: 6,
    line: false,
  }

  return (
    <div className='pb-8 bg-main whitespace-pre-wrap' >
      <h2 className='text-center text-2xl m-8 mt-0 pt-14' >
      Reviews
      </h2>
      <div className="bg-line w-[30vw] min-w-[150px] max-w-[250px] h-px m-auto 
                  mb-8 md:mb-0"/>
      <div>
        <Carousel data={reviews} options={carouselOptions} styles={reviewStyles} />
      </div>
      <ReviewsButton  />
    </div>
  )
}

export default Reviews