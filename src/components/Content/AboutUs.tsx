import React from 'react'
import { FlexColumn } from '../twin'

const AboutUs = () => {
  return (
    <div className="bg-primary p-4">
      <div className="container mx-auto p-3">
        <dl className="  max-w-md text-gray-900 divide-y divide-gray-200">
          <FlexColumn className=" pb-3">
            <dt className="mb-1 text-secondary md:text-lg font-extrabold ">
              Email address
            </dt>
            <dd className="text-lg text-white font-semibold">
              rmseoffice@gmail.com
            </dd>
          </FlexColumn>
          <FlexColumn className=" py-3">
            <dt className="mb-1 text-secondary md:text-lg font-extrabold">
              SR No.
            </dt>
            <dd className="text-lg text-white font-semibold">
              SR No. 808/2, Issac Nagar, NGO New Colony, Perumalpuram Post
            </dd>
          </FlexColumn>
          <FlexColumn className=" py-3">
            <dt className="mb-1 text-secondary md:text-lg font-extrabold">
              PIN
            </dt>
            <dd className="text-lg text-white font-semibold">
              627007, Tirunelveli, Tamilnadu, India
            </dd>
          </FlexColumn>
          <FlexColumn className=" pt-3">
            <dt className="mb-1 text-secondary md:text-lg font-extrabold">
              Phone number
            </dt>
            <dd className="text-lg  text-white font-semibold">
              99430 26310, 99430 26311.
            </dd>
          </FlexColumn>
        </dl>
      </div>
    </div>
  )
}

export default AboutUs
