import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
const Reviews = () => {
  return (
    <div className="container mx-auto px-10">
      <p className="text-black text-center ">Professional</p>
      <p className="text-black text-center">Teschers</p>

      <article>
        <div className="flex items-center justify-center mb-4 ">
          <ChevronLeftIcon
            className="h-6 w-6 flex-shrink-0 text-secondary"
            aria-hidden="true"
          />

          <div className="w-10 h-10 mx-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <ChevronRightIcon
            className="h-6 w-6 flex-shrink-0 text-secondary"
            aria-hidden="true"
          />

          <div className="space-y-1 font-medium dark:text-white"></div>
        </div>
        <div className="flex justify-center">
          <p className="mb-2 sm:w-11/12 lg:w-1/2 text-center font-light text-gray-500 dark:text-gray-400">
            This is my third Invicta Pro Diver. They are just fantastic value
            for money. This one arrived yesterday and the first thing I did was
            set the time, popped on an identical strap from another Invicta and
            went in the shower with it to test the waterproofing.... No
            problems.
          </p>
        </div>

        <p className="mb-3 text-center font-light text-gray-500 dark:text-gray-400">
          Geography Teacher
        </p>
      </article>
    </div>
  )
}

export default Reviews
