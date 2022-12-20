import React from 'react'
import Heading from '../../components/Heading'
function Example() {
  return (
    <div>
      <section aria-labelledby="features-heading" className="relative">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-16">
          <img
            src="https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000296-c18e7c18ea/WhatsApp%20Image%202020-01-24%20at%2012.58.22%20PM.jpeg?ph=e53fdc85c3"
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-center object-cover lg:h-full lg:w-full"
          />
        </div>

        <div className="max-w-2xl mx-auto  pb-24 px-4 sm:pb-32 sm:px-6 lg:max-w-7xl  lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
          <div className="lg:col-start-2">
            <h2
              id="features-heading"
              className="font-medium text-gray-500"
            ></h2>

            <p className="mt-4 text-gray-500 text-2xl py-10 pb-20">
              It is a place where students can learn and explore various
              mathematics concepts and verify various mathematical facts and
              theorems using variety of activities and it is well equipped with
              necessary kits and tools. It provides an opportunity to the
              students to understand and internalize the basic mathematical
              concepts through concrete objects and situations. It provides
              greater scope for individual participation in the process of
              learning and becoming autonomous learners.
            </p>

            <div className="aspect-w-5  aspect-h-2 rounded-lg bg-gray-100 overflow-hidden">
              <img
                src={
                  'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000297-de0ebde0ee/WhatsApp%20Image%202020-01-24%20at%2012.58.26%20PM.jpeg?ph=e53fdc85c3'
                }
                alt={''}
                className="object-center  object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const Math = () => {
  return (
    <>
      <Heading first={'Math '} second="Lab" third={''} />

      <div className="max-w-7xl mx-auto my-20">
        <Example />
      </div>
    </>
  )
}

export default Math
