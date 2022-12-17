import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { testimonials } from '@/constants/testimonials'

const CustomArrow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <div className="max-w-7xl mx-auto">
      <Slider {...settings}>
        {testimonials.map((post, index) => (
          <div
            key={index}
            className="flex flex-col  p-4 bg-transparent"
            // className="mx-10"
          >
            <div className="shadow-lg rounded-lg">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p>{post.fatherName}</p>
                  <div className="block mt-2">
                    <p className="sm:text-sm text-lg font-medium text-gray-900 md:text-base ">
                      {post.remark}
                    </p>
                    <p className="mt-3 text-base text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
              {post.students.map((student, i) => {
                return (
                  <div key={i} className="flex-shrink-0 bg-white px-6 py-4">
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
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default CustomArrow
