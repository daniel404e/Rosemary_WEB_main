import React from 'react'

const index = () => {
  return (
    <div className="flex mx-auto justify-center">
      <div className=" w-2/3 h-1/4 lg:max-w-6xl">
        <h1 className=" fontText my-4 text-4xl text-center font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl ">
          Enroll Now
        </h1>
        <div className="grid overflow-hidden grid-cols-1 grid-rows-8 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-1.5">
          <div
            className="box p-1 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Name of a Child"
              required
            />
          </div>
          <div
            className="box p-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="DD/MM/YY"
              required
            />
          </div>
          <div
            className="box p-1"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Address"
              required
            />
          </div>
          <div
            className="box p-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Parent (Father / Mother)"
              required
            />
          </div>
          <div
            className="box p-1"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Mobile Number"
              required
            />
          </div>
          <div className="box p-1" data-aos="fade-up" data-aos-duration="1000">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Email ID"
              required
            />
          </div>
          <div className="box p-1" data-aos="fade-up" data-aos-duration="1000">
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Grade"
              required
            />
          </div>
          <div
            className="box p-1"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <input
              type="text"
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Comments"
              required
            />
          </div>
          <button
            className="w-fit h-10 rounded-md bg-secondary px-5 text-white mt-4 ml-2 "
            data-aos="fade-tight"
            data-aos-duration="2000"
          >
            Enroll
          </button>
        </div>
      </div>
    </div>
  )
}

export default index
