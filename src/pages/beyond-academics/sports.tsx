import Heading from '@/components/Heading'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { sportsData, headDescription } from '../../constants/sportsData'
//import img1 from '../../images/sports/1.png'
//import img2 from '../../images/sports/2.png'
const img1 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/sports/1.png'
const img2 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/sports/2.png'

const Sports = () => {
  return (
    <>
      <Heading first={'Sport'} second={``} third={''} />
      {/* <HeadPara title={'About'} description={headDescription} /> */}

      <div className="max-w-7xl mx-auto ">
        <div className="ml-10  md:w-1/2">
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-9 pb-0 mx-auto">
              <div className="flex flex-wrap ">
                <div className=" pb-2  flex flex-col items-start">
                  <p className="text-2xl md:text-3xl title-font font-medium text-gray-900 mt-4 mb-4">
                    About
                  </p>
                  <p className="leading-relaxed ">{headDescription}</p>
                </div>
              </div>
            </div>
            <div className="ahr" />
          </section>
          {sportsData.map((data, index) => {
            return (
              <div className="sm:ml-2" key={index}>
                <h1 className=" mb-4 mt-4 text-primary text-lg font-medium leading-relaxed tracking-tight">
                  {data.heading}
                </h1>
                {data.title.map((para, id) => {
                  return (
                    <h5
                      key={id}
                      className="ml-2  space-x-2 flex items-baseline"
                    >
                      <span
                        aria-hidden="true"
                        className="h-4 w-4 text-lg pt-1  text-primary"
                      >
                        <ChevronRightIcon className="h-3 w-3   " />
                      </span>
                      <p>{para}</p>
                    </h5>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={img1}
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={img2}
                alt="Front zipper pouch with included key ring."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sports
