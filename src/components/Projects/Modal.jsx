import React from 'react'
import Carousel from '../Carousel/Carousel'
import projectCarousel from '../Carousel/ProjectCarousel.module.css'

const Modal = ( { setModalOpen, data } ) => {


    // console.log(JSON.stringify(data))

    const carouselOptions = {
        autoplay: true,
        autoplayDelay: 6,
        line: false,
        onlyImgs: true,
      }


  return (

    <div  
        onClick={(e) => {setModalOpen(false); e.stopPropagation()}}
        className='fixed left-0 top-0 w-[100vw] h-[100vh] bg-[#0004] z-50
                    flex justify-center'>
        <div 
            onClick={(e) => {e.stopPropagation()}}
            className='flex flex-col bg-main relative rounded-md
                        w-[90vw] max-w-[500px] h-[80vh] top-[110px]'>
            {data.img.length > 1 ? 
            <Carousel styles={projectCarousel} data={data.img} options={carouselOptions} /> 
            : <img src={data.img}
                className='p-3 max-h-[55vh]' />}

            <h3 className='text-text px-3 leading-tight' >
                {data.title}
            </h3>
            <h4 className='text-gray-600 px-3 leading-tight' >
                {data.location}
            </h4>
            <p className='text-text overflow-y-scroll px-3 pt-2' >
                {data.text}
            </p>
            <div 
            onClick={() => setModalOpen(false)}
            className='bg-accent m-auto py-1 px-2 rounded-md mb-2
                        duration-500 hover:bg-[#ffd68f] hover:cursor-pointer' >
                Close
            </div>
        </div>
    </div>
  )
}

export default Modal