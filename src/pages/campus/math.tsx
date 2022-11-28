import React from 'react'
import Heading from '../../components/Heading'

const Math = () => {
  return (
    <>
      <Heading first={'Math '} second="Lab" third={''} />

      <section className="overflow-hidden text-gray-700">
        <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <p className="text-gray-700">
                  It is a place where students can learn and explore various
                  mathematics concepts and verify various mathematical facts and
                  theorems using variety of activities and it is well equipped
                  with necessary kits and tools. It provides an opportunity to
                  the students to understand and internalize the basic
                  mathematical concepts through concrete objects and situations.
                  It provides greater scope for individual participation in the
                  process of learning and becoming autonomous learners.
                </p>
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1617609198447-26ef10b79f1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://plus.unsplash.com/premium_photo-1661964320064-ca1bfb994d11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1536337005238-94b997371b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGNoaWxkcmVuJTIwZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Math
