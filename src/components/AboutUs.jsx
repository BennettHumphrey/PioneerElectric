import React from 'react'
import { aboutUs, aboutUsMain } from '../resources/data'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  
  const checkEven = num => num % 2 == 0

  console.log(`url base: ${import.meta.env.BASE_URL}`)


  return (
    <div>
      <div className="z-20 text-center">
        <div className="bg-[url(/imgs/Scaffolding-1200.webp)]
                        bg-fixed bg-[left_0px_top_0px] bg-cover z-0">
          <div className="bg-[#ffffffB3]
                          h-full w-full z-10">
            <h2 className='py-12 px-4 font-bold text-[24px]' >
              {aboutUsMain.title}
            </h2>
            <div className="bg-line h-[2px] w-[35vw] mx-auto mb-12"></div>
            <p className='font-medium my-12 mx-4 leading-[1.5] text-[1.5rem]' >
              {aboutUsMain.text}
            </p>
              <section className="flex flex-col gap-8 pb-20
                                          xsm:max-w-[1200px] xsm:mx-auto
                                          lg:flex-row lg:justify-around lg:my-0 lg:mx-auto">
            {aboutUs.map((data, i) => (
                <Link key={i} className="group" to={data.href}>
                  <div className={"flex flex-col relative m-auto " + 
                                  //Even Styles
                                  (checkEven(i) ? 
                                  "bg-main w-[80vw] max-w-[280px] min-h-[12rem]\
                                  lg:min-w-[270px] lg:h-[370px]" :
                                  //Odd Styles
                                   "w-[90vw] max-w-[300px] bg-[#333645]\
                                   lg:min-w-[270px] lg:h-[400px] lg:bottom-[15px]")}>
                    {/* Styles for data.svg in data.jsx */}
                    {/* Animations in tailwind.config.cjs */}
                    {data.svg}
                    <h3 className={checkEven(i) ? "":" text-text-light"} >{data.title}</h3>
                    <p className={"font-medium pt-2 pb-4 mb-12 mt-10 mx-4 px-4 text-base\
                                  sm:max-2-[1200px] sm:flex sm:mx-auto" + 
                                  (checkEven(i) ? "":" text-text-light")} >
                        {data.text}
                    </p>
                    <button className="bg-contact text-text-light w-full h-[2.8rem]
                                          absolute left-0 right-0 bottom-0">
                      Contact Us
                    </button>
                  </div>
                </Link>
            ))}
              </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs