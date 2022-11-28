import React from 'react'
import Heading from '../../components/Heading'
import Hero from '../../components/Hero'

const Computer = () => {
  //  create page with sample data in tailwind css
  return (
    <div>
      <Heading first={'Computer'} second="Lab" third={''} />

      <Hero
        head={'About the lab'}
        para={`Well-designed and separate computer labs for kids and older children, run by a well-educated and qualified faculty, with one-on-one access, which means there is one computer for each child.
        There are more than 40 computers with latest configuration. In this computer lab students receive up to date knowledge with regard to the modern trend in computer education under the proper and pertinent guidance of computer experts.
        Here the students also get golden opportunity to surf high speed internet in order to procure knowledge on diverse fields of study. Our computer lab is an epitome of our institution.
        There is no denying that bookish knowledge of the students is supplemented with the practical knowledge gained in the computer lab under the proper training of our computer teachers. Our computer lab is a state of the art classroom.
        Our goal is to make students comfortable and at ease using technology to enhance all aspects their lives so that skills and concepts that the students learn in the lab can be used in academic classes or at home.
        Naturally the student's enthusiasm to learn new concepts of different software spills over into the lab.
        Computer lab is also associated with integrated learning systems providing individual students with drill-and-practice on basic skills.`}
        img="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  )
}

export default Computer

{
  /* <Heading first={'Computer'} second="Lab" third={''} /> */
}
