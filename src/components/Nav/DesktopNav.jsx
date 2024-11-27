import React from 'react'
import { navOptions } from '../../resources/data'
import { Link } from 'react-router-dom'

const DesktopNav = () => {
  return (
    <div className='sticky bg-main z-10 flex justify-evenly h-12 text-xl' >
        <Link to="/">
            <img 
            src="./company-logo.png" 
            height="50px"
            width="50px" 
            className="h-10 w-10 mt-1" 
            alt="company-logo"/>
        </Link>
        {navOptions.map((o, i) => (
                    <Link key={i} className='h-full flex items-center px-6 duration-500 hover:bg-menu hover:text-text-light 
                                          active:bg-menu active:text-text-light active:duration-0
                                            lg:px-[1.16rem]' 
                        to={o.href}>
                        <p>{o.title}</p>
                    </Link>
                ))}
    </div>
  )
}

export default DesktopNav