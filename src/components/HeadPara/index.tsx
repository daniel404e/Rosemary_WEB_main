import React from 'react'

const HeadPara = ({ title, description }: any) => {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -m-12">
            <div className="p-12 md:w-1/2 flex flex-col items-start">
              <p className="sm:text-3xl md:text-5xl title-font font-medium text-gray-900 mt-4 mb-4">
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
