import { FlexColCenter, GrayText } from '@/components/twin'
import { principalsData } from '@/constants/principals'
import React from 'react'
import Heading from '../../components/Heading'

const Philosophy = () => {
  return (
    <div className="md:max-w-7xl mx-auto">
      <Heading first={'Philosophy'} second={''} third={''} />
      <FlexColCenter>
        <GrayText>{principalsData.para3}</GrayText>
        <GrayText>{principalsData.para4}</GrayText>
        <GrayText>{principalsData.para5}</GrayText>
        <GrayText>{principalsData.para6}</GrayText>
        <GrayText>{principalsData.para7}</GrayText>
      </FlexColCenter>
    </div>
  )
}

export default Philosophy
