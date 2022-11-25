import Image from 'next/image'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import pic1 from '../../images/pic1.jpg'
import pic2 from '../../images/pic2.jpg'
import pic3 from '../../images/pic3.jpg'

const index = () => {
  return (
    <div className="">
      <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        showIndicators={false}
        showArrows={false}
        preventMovementUntilSwipeScrollTolerance={true}
      >
        {/* < className="sm:h-[300px] md:h-[500px] lg:h-[800px]  text-black"> */}
        <div className="sm:h-[1000px] md:h-auto desktop:h-[1000px] text-black imgdata">
          <Image height={1000} width={1920} src={pic1} alt="logo" />
        </div>
        <div className="sm:h-[1000px] md:h-auto desktop:h-[1000px] text-black imgdata">
          <Image height={1000} width={1920} src={pic2} alt="logo" />
        </div>
        <div className="sm:h-[1000px] md:h-auto desktop:h-[1000px] text-black imgdata">
          <Image height={1000} width={1920} src={pic3} alt="logo" />
        </div>
      </Carousel>
    </div>
  )
}

export default index
{
  /* <div className="relative">
            <Image height={1000} width={1920} className=" opacity-40" src={pic1} alt="logo" />

            <h2 className="absolute text-3xl text-black bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2>
            <h3 className="absolute  text-secondary p-10  fontText text-6xl top-5 left-5">Rosemery School Of Excellence</h3>
            <h3 className="absolute text-left text-2xl w-1/2 text-black pl-10 top-1/2 left-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate perspiciatis placeat veniam eos,
              asperiores facilis quam corporis libero magnam distinctio vel sed enim beatae ratione autem quas incidunt
              quia aperiam fugiat impedit iusto illum error aut? Eaque fuga, totam suscipit cupiditate laboriosam
              voluptatum perferendis quidem, nam, beatae voluptates eligendi velit?
            </h3>
            <h3 className="absolute text-2xl text-black bottom-5 right-5">Bottom Right</h3>
          </div> */
}
