import React from 'react'

const HeadPara = ({ title, description }: any) => {
  return (
    <div className="max-w-7xl mx-auto md:mx-5 md:w-1/2">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-9 pb-0 mx-auto">
          <div className="flex flex-wrap ">
            <div className=" pb-2  flex flex-col items-start">
              <p className="text-2xl md:text-3xl title-font font-medium text-gray-900 mt-4 mb-4">
                {title}
              </p>
              <p className="leading-relaxed ">{description}</p>
            </div>
          </div>
        </div>
        <div className="ahr" />
      </section>
    </div>
  )
}

export default HeadPara
