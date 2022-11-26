import Heading from '@/components/Heading'
import React from 'react'
// import { FlexCenter } from '@/components/twin/index'
import { GoTelescope } from 'react-icons/go'
import { FaGuitar, FaAward, FaChess, FaUniversity } from 'react-icons/fa'
import BookDetail from '@/components/BookDetail/index'
import { IoMdSchool } from 'react-icons/io'
import { HiBuildingOffice2 } from 'react-icons/hi2'
import { GiEvilTower, GiTrophyCup, GiBlackBook } from 'react-icons/gi'
import BookHeading from '@/BookHeading'
import {
  firstBook,
  secondBook,
  threeBook,
  fourBook,
  fiveBook,
  sixBook,
  sevenBook,
  eightBook,
  nineBook,
  KgBook
} from '@/constants/booksData'

const Books = () => {
  return (
    <>
      <Heading first={'Text'} second={'Books'} third={'Details'} />
      <BookHeading iconeName={<GoTelescope />} title={'First'} />
      <BookDetail bookDetail={firstBook} />
      <BookHeading iconeName={<FaGuitar />} title={'Second'} />
      <BookDetail bookDetail={secondBook} />
      <BookHeading iconeName={<GiEvilTower />} title={'Third'} />
      <BookDetail bookDetail={threeBook} />
      <BookHeading iconeName={<IoMdSchool />} title={'Four'} />
      <BookDetail bookDetail={fourBook} />
      <BookHeading iconeName={<FaChess />} title={'Five'} />
      <BookDetail bookDetail={fiveBook} />
      <BookHeading iconeName={<FaUniversity />} title={'Six'} />
      <BookDetail bookDetail={sixBook} />
      <BookHeading iconeName={<GiTrophyCup />} title={'Seven'} />
      <BookDetail bookDetail={sevenBook} />
      <BookHeading iconeName={<HiBuildingOffice2 />} title={'Eight'} />
      <BookDetail bookDetail={eightBook} />
      <BookHeading iconeName={<FaAward />} title={'Nine'} />
      <BookDetail bookDetail={nineBook} />
      <BookHeading iconeName={<GiBlackBook />} title={'KG'} />
      <BookDetail bookDetail={KgBook} />
    </>
  )
}

export default Books
