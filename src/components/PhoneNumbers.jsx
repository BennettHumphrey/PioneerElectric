import React from 'react'
import { phoneNumbers } from '../resources/data'

const PhoneNumbers = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-around lg:mx-[6rem]">
          {phoneNumbers.map((data, i) => (
            <div key={i} className="flex flex-col text-center p-4 my-8">
                <h2 className="text-accent text-[19px]" >{data.title}</h2>
                <p className='text-[1.5rem]' >{data.text}</p>
            </div>
          ))}
        </div>
  )
}

export default PhoneNumbers