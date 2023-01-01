import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import pic1 from '../../images/carousel/1.jpg'
import pic2 from '../../images/carousel/2.jpg'
import pic3 from '../../images/carousel/3.jpg'
import pic4 from '../../images/carousel/4.png'
import pic5 from '../../images/carousel/5.jpg'
import pic6 from '../../images/carousel/6.jpg'
import pic7 from '../../images/carousel/7.png'
import pic8 from '../../images/carousel/8.jpg'
import pic9 from '../../images/carousel/9.jpg'
import pic10 from '../../images/carousel/10.png'

const index = () => {
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
