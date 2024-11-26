import React from 'react'
import { contactInfo } from '../resources/data'

const CallNow = () => {
  return (
    <div className='hover:cursor-pointer text-text-light bg-company w-[80vw] max-w-[240px] h-14 my-[10vw] lg:my-14 mx-auto p-2 mb-8 text-center no-underline duration-500 hover:scale-110 hover:rounded-xl'>
        <div>
            <p className='text-xs m-auto'>CALL NOW FOR A FREE QUOTE</p>
            <h5 className='text-xl'>{contactInfo.phone}</h5>
        </div>
    </div>
  )
}

export default CallNow