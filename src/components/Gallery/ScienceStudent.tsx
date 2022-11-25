import React from 'react'

export const ScienceStudent = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-2/3 mx-auto">
            <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img
                alt="gallery"
                className="w-full object-cover h-full object-center block  absolute inset-0"
                src="https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              />
            </div>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  absolute inset-0"
                    src="https://images.unsplash.com/photo-1562411052-105105232432?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                  />
                </div>
              </div>
              <div className="px-2 w-1/2">
                <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full object-center block  absolute inset-0"
                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
