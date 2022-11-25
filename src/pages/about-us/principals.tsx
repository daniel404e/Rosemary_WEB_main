import { BlackText, BlueText, FlexColCenter, GrayText } from '@/components/twin'
import { principals_data } from '@/constants/principals'
import React from 'react'
import Heading from '../../components/Heading'

const Principals = () => {
  return (
    <>
      <Heading first={"Principal's"} second={'Corner'} third={''} />
      <FlexColCenter>
        <GrayText>
          {principals_data.para1}
          <BlackText>{principals_data.para2}</BlackText>
        </GrayText>
        <GrayText>{principals_data.para3}</GrayText>
        <GrayText>{principals_data.para4}</GrayText>
        <GrayText>{principals_data.para5}</GrayText>
        <GrayText>{principals_data.para6}</GrayText>
        <GrayText>{principals_data.para7}</GrayText>
        <BlueText>{principals_data.para8}</BlueText>
      </FlexColCenter>
    </>
  )
}

export default Principals
