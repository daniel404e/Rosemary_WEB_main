import { BlackText, BlueText, FlexColCenter, GrayText } from '@/components/twin'
import { principalsData } from '@/constants/principals'
import React from 'react'
import Heading from '../../components/Heading'

const Principals = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
      <Heading first={"Principal's"} second={'Corner'} third={''} />
      <FlexColCenter>
        <GrayText>
          {principalsData.para1}
          <BlackText>{principalsData.para2}</BlackText>
        </GrayText>
        <GrayText>{principalsData.para3}</GrayText>
        <GrayText>{principalsData.para4}</GrayText>
        <GrayText>{principalsData.para5}</GrayText>
        <GrayText>{principalsData.para6}</GrayText>
        <GrayText>{principalsData.para7}</GrayText>
        <BlueText>{principalsData.para8}</BlueText>
      </FlexColCenter>
    </div>
  )
}

export default Principals
