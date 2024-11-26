import React from 'react';
import { useWindowWidth } from '../useWindowWidth';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { contactInfo } from '../../resources/data';

const Nav = () => {

    const width = useWindowWidth();

  return (
    //Call-Now and logo section is 144 px tall, so it gets hidden on scroll due to the top-[-48px]
    <div className='sticky top-[-144.5px] z-[100]' >
        <div className='flex flex-col items-center bg-black' >
            <img src="./company-logo-large.webp"
              className='px-4 pb-2 h-[96px] w-[300px] bg-black' 
              alt='Company logo' />
            <h1 className='text-2xl p-2 bg-company text-text-light w-full text-center' >
              Call us! {contactInfo.phone}
            </h1>
        </div>
        {width > 1018 ? <DesktopNav  /> : <MobileNav  />}
    </div>
  )
}





export default Nav