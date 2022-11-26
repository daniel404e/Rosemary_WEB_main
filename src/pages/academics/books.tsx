import Heading from '@/components/Heading'
import React from 'react'
// import { FlexCenter } from '@/components/twin/index'
import { GoTelescope } from 'react-icons/go'
import {firstData,secoundData,thirdData,fourData,fiveData,sixData,sevenData,eightData,nineData,kgData} from '@/constants/booksData'
import { FaGuitar, FaAward, FaChess, FaUniversity } from 'react-icons/fa'

import { IoMdSchool } from 'react-icons/io'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { GiEvilTower, GiTrophyCup, GiBlackBook } from 'react-icons/gi'
import BookHeading from '@/BookHeading'


const Books = () => {
  return (
    <>
      <Heading first={'Text'} second={'Books'} third={'Details'} />
      
      <div className="flex md:justify-around  w-full min-h-full flex-wrap  md:flex-row flex-col justify-center items-center   ">

      <BookHeading iconeName={<GoTelescope />} title={'First'} bookDetail={firstData} />
      <BookHeading iconeName={<FaGuitar />} title={'Second'} bookDetail={secoundData}/>
      <BookHeading iconeName={<GiEvilTower />} title={'Third'} bookDetail={thirdData}/>
      </div>
      <div className="flex md:justify-around  flex-wrap  md:flex-row flex-col justify-center items-center   ">
      <BookHeading iconeName={<IoMdSchool />} title={'Four'} bookDetail={fourData}/>

      <BookHeading iconeName={<FaChess />} title={'Five'} bookDetail={fiveData}/>
      <BookHeading iconeName={<FaUniversity />} title={'Six'} bookDetail={sixData}/>
      </div>
      <div className="flex md:justify-around   flex-wrap  md:flex-row flex-col   ">
      <BookHeading iconeName={<GiTrophyCup />} title={'Seven'} bookDetail={sevenData}/>
      <BookHeading iconeName={<HiBuildingOffice2 />} title={'Eight'} bookDetail={eightData}/>

      <BookHeading iconeName={<FaAward />} title={'Nine'} bookDetail={nineData}/>
      <BookHeading iconeName={<GiBlackBook />} title={'KG'} bookDetail={kgData}/>
 
      </div>
     
   
    </>
  )
}

export default Books
