import { FlexColCenter } from '@/components/twin'
import { visionData } from '@/constants/vision'
import React from 'react'
import tw from 'twin.macro'
import Heading from '../../components/Heading'

const Vision = () => {
  const ComponentText = tw.p`leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem]`
  return (
    <>
      <Heading first={'OUR'} second={'VISIONARIES'} third={''} />
      <div className="flex justify-around w-full mt-10 md:flex-row flex-col ">
        <FlexColCenter className="md:w-2/4 w-full">
          <h1 className="text-[#463AA1] leading-relaxed text-2xl font-medium p-2 ">
            {visionData.para1}
          </h1>
          <ComponentText>{visionData.para2}</ComponentText>
          <ComponentText>{visionData.para3}</ComponentText>
          <ComponentText>{visionData.para4}</ComponentText>
          <ComponentText>{visionData.para5}</ComponentText>
          <ComponentText>{visionData.para6}</ComponentText>
        </FlexColCenter>
        <div className="md:w-2/4 w-full flex flex-col justify-center  items-center">
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
    </>
  )
}

export default Vision
