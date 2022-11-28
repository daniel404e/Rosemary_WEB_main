import Heading from '@/components/Heading'
import HeadPara from '@/components/HeadPara'
import React from 'react'
import { sportsData, headDescription } from '../../constants/sportsData'

const Sports = () => {
  return (
    <>
      <Heading first={'Sport'} second={`'`} third={'s'} />
      <HeadPara title={'About'} description={headDescription} />

      <div className="max-w-7xl mx-auto ">
        <div className="ml-4">
          {sportsData.map((data, index) => {
            return (
              <div className="sm:ml-2" key={index}>
                <h1 className=" mb-4 mt-4 text-primary text-lg font-medium leading-relaxed tracking-tight">
                  {data.heading}
                </h1>
                {data.title.map((para, id) => {
                  return (
                    <h5 key={id} className="ml-2">
                      <span className="text-lg mr-2 p-2 font-normal leading-relaxed text-primary">
                        {'>'}
                      </span>
                      {para}
                    </h5>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Sports
