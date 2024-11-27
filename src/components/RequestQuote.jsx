import React from 'react'
import { Link } from 'react-router-dom'

const RequestQuote = () => {
  return (
    <div className="request-quote bg-company text-text-light text-center flex 
                    flex-col items-center pb-8">
      <h2 className="pt-8 mx-1 mb-8 text-xl">Trusted Electricians, Home Advisor Approved</h2>
      <Link to="../contact">
        <button className="w-[80vw] h-12 bg-[#333645] text-text-light 
                            cursor-pointer transition duration-500 rounded-md 
                            max-w-[600px] hover:bg-main hover:text-black">
          REQUEST A QUOTE
        </button>
      </Link>
    </div>
  )
}

export default RequestQuote