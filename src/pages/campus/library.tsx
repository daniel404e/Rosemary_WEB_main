import Heading from '@/components/Heading'
import React from 'react'
import HeroRight from '../../components/Hero/HeroRight'

const Library = () => {
  return (
    <>
      <Heading first={'Library'} second={''} third={''} />
      <HeroRight
        head={'Before You Arrive'}
        para={`Well-designed and separate computer labs for kids and older children, run by a well-educated and qualified
    faculty, with one-on-one access, which means there is one computer for each child. There are more than 40
    computers with latest configuration. In this computer lab students receive up to date knowledge with
    regard to the modern trend in computer education under the proper and pertinent guidance of computer
    experts. Here the students also get golden opportunity to surf high speed internet in order to procure
    knowledge on diverse fields of study. Our computer lab is an epitome of our institution. There is no
    denying that bookish knowledge of the students is supplemented with the practical knowledge gained in the
    computer lab under the proper training of our computer teachers. Our computer lab is a state of the art
    classroom.`}
        img="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
      />
    </>
  )
}

export default Library
