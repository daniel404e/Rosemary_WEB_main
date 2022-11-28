import { FlexColCenter } from '@/components/twin'
import { studentssenateData } from '@/constants/students_senate'
import React from 'react'
import Heading from '../../components/Heading'

const Studentssenate = () => {
  return (
    <>
      <Heading first={'Students'} second={'Senate'} third={''} />
      <FlexColCenter>
        <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para1}
        </p>
        <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para2}
        </p>
        <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para3}
        </p>
        <p className=" flex justify-center items-center leading-relaxed text-justify w-2/3 text-[#888] mt-8 text-[1.2rem] ">
          <span className="text-[#463AA1] font-medium">
            {' '}
            {studentssenateData.para4}
          </span>
        </p>
      </FlexColCenter>
    </>
  )
}

export default Studentssenate
