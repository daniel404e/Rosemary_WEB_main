import Heading from '@/components/Heading'

import React from 'react'
const pic1 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/library/1.jpg'
const pic2 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/library/2.jpg'
const pic3 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/library/3.jpg'
const pic5 = 'https://d1tvl7ljkwrklc.cloudfront.net/images/library/5.jpg'
const Library = () => {
  return (
    <>
      <Heading first={'Library'} second={''} third={''} />
      <div className="py-16 xl:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                Library for Children
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative  md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>
                    The library provides many children with their first chance
                    to use and enjoy a library. The school library is a
                    welcoming place for study and reading. The school library is
                    to support the students and teachers by providing access to
                    current, adequate and appropriate information resources. It
                    is also to ensure that all the students, teachers and staff
                    are effectively using the ideas and information. The library
                    encourages the love of reading and development of students
                    independent learning skills.
                  </p>
                  <br />
                  <p>
                    There are plenty of books, encyclopedias, picture books,
                    activity books, dictionaries. We have around 3000 books in
                    our library for varied age groups.
                  </p>
                  <br />
                  <br />

                  <ul>
                    <li>
                      <span className="text-blue-300">{'>'}</span> There is
                      seating capacity of 80 children in the library.
                    </li>
                    <br />

                    <li>
                      <span className="text-blue-300">{'>'}</span> Students from
                      1st to 8th standard visit the library. They refer books
                      and participate in library activities.
                    </li>
                    <br />

                    <li>
                      <span className="text-blue-300">{'>'}</span> The interior
                      of the library have been designed with a view of making it
                      modern and student friendly.
                    </li>
                    <br />

                    <li>
                      <span className="text-blue-300">{'>'}</span> The library
                      follows an open access system. The books are classified
                      and shelved according to the Dewey decimal classification.
                    </li>
                  </ul>
                </div>
                <div className="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <p>
                    Reading may well be the first discipline that a new student
                    of a language comes into contact with. Seeing the words of a
                    language on a paper will often be the first place people see
                    the language, at least knowingly. It is here, in this
                    discipline, that learners will begin to see how the language
                    is put together to make sense. Reading is all about
                    understanding the written word and therefore it is only
                    natural that once you have been reading for a while you will
                    want to progress to writing. Reading is an important skill
                    that needs to be developed in children. Not only is it
                    necessary for survival in the world of schools and (later
                    on) universities, but in adult life as well. The ability to
                    learn about new subjects and find helpful information on
                    anything from health problems and consumer protection to
                    more academic research into science or the arts depends on
                    the ability to read. Reading by way of books, magazines
                    expose kids to new vocabulary, knowledge and expands their
                    horizon in totally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={pic1}
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={pic2}
                alt="Front zipper pouch with included key ring."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={pic3}
                alt="Drawstring top with elastic loop closure and textured interior padding."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div>
            <div className="w-full aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
              <img
                src={pic5}
                alt="Front zipper pouch with included key ring."
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Library
