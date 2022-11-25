import {
  headObject,
  heroLeftObject,
  heroRightObject
} from '@/constants/students_club'
import React from 'react'
import Heading from '../../components/Heading'
import HeadPara from '../../components/HeadPara'
import Hero from '../../components/Hero'
import HeroRight from '../../components/Hero/HeroRight'

const Studentsclubs = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <Heading first="Students" second="Clubs" third="" />
      </div>
      <HeadPara title={headObject.title} description={headObject.description} />
      <Hero
        img={heroLeftObject.img}
        head={heroLeftObject.name}
        para={heroLeftObject.description}
      />
      <HeroRight
        img={heroRightObject.img}
        head={heroRightObject.name}
        para={heroRightObject.description}
      />
    </div>
  )
}

export default Studentsclubs
