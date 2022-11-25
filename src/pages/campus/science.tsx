import React from 'react'
import { ScienceStudent } from '../../components/Gallery/ScienceStudent'
import Heading from '../../components/Heading'
const Science = () => {
  return (
    <>
      <Heading first={'Composite'} second={'Science'} third={'LAB'} />
      <div className="flex justify-around min-w-full ">
        <div className="w-2/4">
          <ScienceStudent />
        </div>
        <div className="w-2/4 py-16">
          <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
            Laboratories are the most important infrastructure of an educational
            institution. RMSE has got an Composite Science Lab to enable the
            practical knowledge of students by doing Experiments. The Science
            Lab is well equipped with furniture and apparatus related to the
            curriculum of the students.
          </p>
          <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
            The School encourages the Students to use these laboratories to
            learn through experiments. Every year latest instruments, specimens,
            charts etc. are purchased for these laboratories.
          </p>
          <p className="leading-relaxed text-justify w-2/3 text-[#888] mt-5 text-[1.2rem] ">
            The Composite Lab provides facilities and opportunities for students
            of classes 6 to 10 in carrying out experiments and activities in all
            science subjects. The lab is well equipped and can accommodate more
            than 40 students at a time. The lab settings include spacious tables
            with plug points to perform experiments with electricity, lenses and
            prisms for light experiments in optics, reagent shelves, sinks and
            water taps, Bunsen burner, reagents and chemicals for experiments in
            chemistry, sufficient number of microscopes for slide preparations
            and observations, charts and models etc... Students get equal
            opportunity for developing their scientific skills and interests by
            following the principle of learning by doing.
          </p>
        </div>
      </div>
    </>
  )
}

export default Science
