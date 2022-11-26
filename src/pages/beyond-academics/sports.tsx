import React from 'react'
import { sportsData } from '../../constants/sportsData'

const Sports = () => {
  return (
    <div className="flex justify-center items-center">
      {/* <div className="md:ml-44 ml-16 lg:ml-72 mt-10">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
          Sports
        </h1>

        <h1 className="text-justify w-8/12 leading-relaxed mt-8 mb-4 text-gray-900 text-base">
          We oﬀer a broad and balanced Sports and Physical Education curriculum,
          to inspire all students to succeed and excel in sport and physical
          activity and to encourage them to become lifelong participants of a
          healthy active lifestyle.
        </h1>
      </div> */}
      <div
      // className="md:ml-44 ml-16 lg:ml-72 mt-10"
      >
        {sportsData.map((data, index) => {
          return (
            <>
              <h1
                key={index}
                className=" mb-4 mt-4 text-[#463AA1] text-lg font-medium leading-relaxed tracking-tight"
              >
                {data.heading}
              </h1>
              {data.title.map((para, id) => {
                return (
                  <h5 key={id} className="ml-2">
                    <span className="text-lg mr-2 p-2 font-normal leading-relaxed text-[#463aa1]">
                      {'>'}
                    </span>
                    {para}
                  </h5>
                )
              })}
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Sports
