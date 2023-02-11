/* eslint-disable */
// prettier-ignore
import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const pic1 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/1.jpg'
const pic2 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/2.jpg'
const pic3 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/3.jpg'
const pic4 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/4.png'
const pic5 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/5.jpg'
const pic6 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/6.jpg'
const pic7 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/7.png'
const pic8 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/8.jpg'
const pic9 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/9.jpg'
const pic10 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/carousel/10.png'

//from aws server using cloudfront

function index(): JSX.Element {
  return (
    <div className="">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showArrows={true}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic1} alt="logo 1" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic2} alt="logo 2" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic3} alt="logo 3" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic4} alt="logo 4" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic5} alt="logo 5" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic6} alt="logo 6" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic7} alt="logo 7" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic8} alt="logo 8" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic9} alt="logo 9" />
        </div>
        <div className="sm:h-[888px] md:h-auto desktop:h-[888px] text-black imgdata">
          <Image height={915} width={1920} src={pic10} alt="logo 9" />
        </div>
      </Carousel>
    </div>
  )
}

export default index
