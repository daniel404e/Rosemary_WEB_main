import React from 'react'
import Heading from '../../components/Heading'

const Computer = () => {
  //  create page with sample data in tailwind css
  return (
    <div>
      <Heading first={'Computer'} second="Lab" third={''} />

      <div className="relative  mx-auto max-w-7xl mt-20">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000374-5d8335d836/700/20200124_135938%5B1%5D.jpg?ph=e53fdc85c3"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
              Computer
            </p>
            <p className="mt-3 text-lg text-black">
              Well-designed and separate computer labs for kids and older
              children, run by a well-educated and qualified faculty, with
              one-on-one access, which means there is one computer for each
              child.
            </p>
            <p className="mt-3 text-lg text-black">
              There are more than 40 computers with latest configuration. In
              this computer lab students receive up to date knowledge with
              regard to the modern trend in computer education under the proper
              and pertinent guidance of computer experts.
            </p>
            <p className="mt-3 text-lg text-black">
              Here the students also get golden opportunity to surf high speed
              internet in order to procure knowledge on diverse fields of study.
              Our computer lab is an epitome of our institution.
            </p>
          </div>
        </div>
      </div>
      <div className="relative  mx-auto max-w-7xl mt-20">
        <div className="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000375-0c91c0c91f/700/20200124_135803%5B1%5D.jpg?ph=e53fdc85c3"
            alt=""
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <p className="mt-2 text-primary text-3xl font-extrabold tracking-tight sm:text-4xl">
              Guidence
            </p>
            <p className="mt-3 text-lg text-black">
              There is no denying that bookish knowledge of the students is
              supplemented with the practical knowledge gained in the computer
              lab under the proper training of our computer teachers. Our
              computer lab is a state of the art classroom.
            </p>
            <p className="mt-3 text-lg text-black">
              Our goal is to make students comfortable and at ease using
              technology to enhance all aspects their lives so that skills and
              concepts that the students learn in the lab can be used in
              academic classes or at home.
            </p>
            <p className="mt-3 text-lg text-black">
              Naturally the students enthusiasm to learn new concepts of
              different software spills over into the lab.
            </p>
            <p className="mt-3 text-lg text-black">
              Computer lab is also associated with integrated learning systems
              providing individual students with drill-and-practice on basic
              skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Computer

{
  /* <Heading first={'Computer'} second="Lab" third={''} /> */
}
