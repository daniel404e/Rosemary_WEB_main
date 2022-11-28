import { visionData } from '@/constants/vision'
import React from 'react'
import tw from 'twin.macro'
import Heading from '../../components/Heading'

const Vision = () => {
  const ComponentText = tw.p` text-justify  text-[#888] mt-5 text-[1.2rem]`
  return (
    <div className="md:max-w-7xl mx-auto">
      <Heading first={'OUR'} second={'VISIONARIES'} third={''} />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h1 className="text-[#463AA1] leading-relaxed text-2xl p-2 font-medium ">
                {visionData.para1}
              </h1>
              <ComponentText>{visionData.para2}</ComponentText>
              <ComponentText>{visionData.para3}</ComponentText>
              <ComponentText>{visionData.para4}</ComponentText>
              <ComponentText>{visionData.para5}</ComponentText>
              <ComponentText>{visionData.para6}</ComponentText>
            </div>
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <h1 className="text-[#463AA1] leading-relaxed text-2xl p-2 font-medium ">
                {visionData.para7}
              </h1>
              <ComponentText>{visionData.para8}</ComponentText>
              <ComponentText>{visionData.para9}</ComponentText>
              <ComponentText>{visionData.para10}</ComponentText>
              <ComponentText>{visionData.para11}</ComponentText>
              <ComponentText>{visionData.para12}</ComponentText>
              <ComponentText>{visionData.para13}</ComponentText>
              <ComponentText>{visionData.para14}</ComponentText>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Vision
