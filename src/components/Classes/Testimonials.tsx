import React from 'react'
// import { useMediaQuery } from 'react-responsive'
// import { useWindowSize } from 'react-use'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { testimonials } from '@/constants/testimonials'

const Testimonials = () => {
  //
  // const small = useMediaQuery({ query: '(max-width: 600px)' })
  // const { width: size } = useWindowSize()

  // const medium = useMediaQuery({
  //   query: '(min-width:600px) and (max-width:960px)'
  // })
  // const large = useMediaQuery({
  //   query: '(min-width:960px) and (max-width:2000px)'
  // })

  return (
    <div className={`max-w-7xl mx-auto `}>
      <div id="pricing" className="GradientColor2  w-full text-center py-20 ">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Testimonials
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Why choose Rosemary school of excellence
          </p>
        </div>

        <div className="mt-10">
          <Carousel
            selectedItem={5}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            showIndicators={false}
            showArrows={false}
            preventMovementUntilSwipeScrollTolerance={true}
            // show 3 slides at a time
          >
            {testimonials.map((post, index) => (
              <div
                key={index}
                className="flex flex-col mx-5 min-h-[400px] rounded-lg shadow-lg overflow-hidden"
              >
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p>{post.fatherName}</p>
                    <span className="block mt-2">
                      <p className="sm:text-sm text-lg font-medium text-gray-900 md:text-base ">
                        {post.remark}
                      </p>
                      <p className="mt-3 text-base text-gray-500">
                        {post.date}
                      </p>
                    </span>
                  </div>
                </div>
                {post.students.map((student, i) => {
                  return (
                    <div key={i} className="flex-shrink-0 bg-gray-50 px-6 py-4">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">
                            {student.name}
                          </p>
                          <div className="flex space-x-1 text-sm text-gray-500">
                            <p>{student.class}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
{
  /* <div className="flex justify-center items-center">
              
              </div> */
}
