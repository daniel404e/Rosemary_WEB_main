import { FlexColCenter } from '@/components/twin'
import { vision_data } from '@/constants/vision'
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
            {vision_data.para1}
          </h1>
          <ComponentText>{vision_data.para2}</ComponentText>
          <ComponentText>{vision_data.para3}</ComponentText>
          <ComponentText>{vision_data.para4}</ComponentText>
          <ComponentText>{vision_data.para5}</ComponentText>
          <ComponentText>{vision_data.para6}</ComponentText>
        </FlexColCenter>
        <div className="md:w-2/4 w-full flex flex-col justify-center  items-center">
          <h1 className="text-[#463AA1] leading-relaxed text-2xl p-2 font-medium ">
            {vision_data.para7}
          </h1>

          <ComponentText>{vision_data.para8}</ComponentText>
          <ComponentText>{vision_data.para9}</ComponentText>
          <ComponentText>{vision_data.para10}</ComponentText>
          <ComponentText>{vision_data.para11}</ComponentText>
          <ComponentText>{vision_data.para12}</ComponentText>
          <ComponentText>{vision_data.para13}</ComponentText>
          <ComponentText>{vision_data.para14}</ComponentText>
        </div>
      </div>
    </>
  )
}

export default Vision
