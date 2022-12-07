import { FlexColCenter } from '@/components/twin'
import { studentssenateData } from '@/constants/students_senate'
import React from 'react'
import Heading from '../../components/Heading'

const Studentssenate = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Heading first={'Students'} second={'Senate'} third={''} />
      <FlexColCenter>
        <p className="leading-relaxed text-justify w-full text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para1}
        </p>
        <p className="leading-relaxed text-justify w-full text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para2}
        </p>
        <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
          {studentssenateData.para3}
        </p>
        <p className=" flex justify-center items-center leading-relaxed text-justify w-2/3 text-[#888] mt-8 text-[1.2rem] ">
          <span className="text-[#463AA1] font-bold py-2 italic">
            <span className="border-b-2 border-[#463AA1]">
              {studentssenateData.para4}
            </span>
          </span>
        </p>

        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000521-d45e0d45e2/700/WhatsApp%20Image%202020-10-23%20at%2010.37.29%20AM.jpeg?ph=e53fdc85c3"
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000522-98f2298f25/700/WhatsApp%20Image%202020-10-23%20at%2010.37.28%20AM.jpeg?ph=e53fdc85c3"
                alt="Front zipper pouch with included key ring."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </FlexColCenter>
    </div>
  )
}

export default Studentssenate
