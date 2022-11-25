import React from 'react'

const Quote = () => {
  return (
    <div>
      <div className=" flex mx-auto justify-center">
        <hr
          data-aos="fade-left"
          data-aos-duration="600"
          className="my-8 mx-2 w-8 h-8  bg-gradient-to-r from-primary to-primarylight rounded border-0 md:my-12 "
        />
        <hr
          data-aos="fade-up"
          data-aos-duration="600"
          className="my-8 mx-2 w-8 h-8 bg-gray-200 rounded border-0 md:my-12 "
        />
        <hr
          data-aos="fade-right"
          data-aos-duration="600"
          className="my-8 mx-2 w-8 h-8  bg-gradient-to-r from-primary to-primarylight rounded border-0 md:my-12 "
        />
      </div>
      <figure className="mx-auto max-w-screen-md text-center">
        <blockquote>
          <p className="text-4xl fontText italic font-medium text-gray-900 ">
            Education is the most powerful weapon which you can use to change
            the world!{' '}
          </p>
        </blockquote>
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 ">
            <cite className="pr-3 font-medium text-gray-900">
              NELSON MANDELA
            </cite>
          </div>
        </figcaption>
      </figure>
    </div>
  )
}

export default Quote
