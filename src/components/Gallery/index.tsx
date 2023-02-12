import React from 'react'

const pic2 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/2.jpg'
const pic3 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/3.jpg'
const pic4 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/4.jpg'
const pic1 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/1.jpg'
const pic5 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/5.jpg'
const pic6 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/6.jpg'
const pic7 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/7.jpg'
const pic8 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/8.jpg'
const pic9 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/gallery/9.jpg'

import Image from 'next/image'
const Gallery = () => {
  const arraywithimages = [
    {
      title: 'Best in class education',
      src: pic1,
      alt: 'image'
    },
    { title: 'Constant care for KG children', src: pic2, alt: 'image' },
    {
      title: 'Continuous activities',
      src: pic3,
      alt: 'image'
    },
    { title: 'Excellent infrastructure', src: pic4, alt: 'image' },
    { title: 'Extracurricular activities', src: pic5, alt: 'image' },
    { title: 'Huge library for aspiring students', src: pic6, alt: 'image' },
    { title: 'Nuanced activities for children', src: pic7, alt: 'image' },
    { title: 'Spacious playground', src: pic8, alt: 'image' },
    { title: 'Top notch classrooms', src: pic9, alt: 'image' }
  ]

  return (
    <section
      className="wrapper-full tab-container effectTab-header"
      id="style_9"
    >
      <h1 className=" gradientfor21centuary fontText my-4 text-2xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-4xl ">
        ~A 21st CENTURY INSTITUTION~
      </h1>
      <p
        className="text-center"
        style={{ fontFamily: 'inherit', color: 'GrayText' }}
      >
        ACADEMICS and BEYOND 🌟
      </p>
      <div className="wrapper tab-item">
        <div className="custom-row">
          <div className="column-12 column-xs-12 tab">
            <div className="custom-row">
              {/* Image 1 */}
              {arraywithimages.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="column-4 column-sm-6 column-md-6 column-xs-12 "
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <div className="effect effect-nine">
                      <Image
                        width={340}
                        height={230}
                        src={item.src}
                        className="img-fluid w-[340px] h-[230px]"
                        alt="image"
                      />
                      <div className="tab-text">
                        {/* <h2>Three column 4</h2> */}
                        <p
                          style={{ fontFamily: 'bliss', fontSize: 'xx-large' }}
                        >
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
