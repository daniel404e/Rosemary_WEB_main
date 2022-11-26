import React from 'react'
import { FlexColCenter, FlexCenter } from '@/components/twin/index'

const BookDetail = ({ bookDetail }: any) => {
  return (
    <>
      {bookDetail.map((data: any, index: number) => {
        return (
          <>
            <div className="flex justify-center items-center ">
              <h1
                key={index}
                className="text-4xl animate-bounce my-5 text-secondary font-semibold leading-relaxed "
              >
                {data.title}
              </h1>
            </div>
            <div className="md:grid overflow-hidden lg:grid flex justify-center flex-col items-center text-center lg:grid-cols-5 md:grid-cols-3  lg:grid-rows-1 gap-4">
              {data.books.map((bookData: any) => {
                return (
                  <>
                    <div className="h-52 ml-3 my-5 w-36 relative cursor-pointer mb-5">
                      <div className="absolute inset-0 bg-gray-100 bg-opacity-60 opacity-25 rounded-lg shadow-2xl"></div>
                      <div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
                        <div className="h-full w-full bg-gray-100 bg-opacity-60 border-gray-300 rounded-lg shadow-sm">
                          <FlexColCenter>
                            <FlexCenter>
                              <img
                                src="/assest/no-photo.jpg"
                                className="w-40"
                                alt="image"
                              />
                            </FlexCenter>
                            <FlexCenter>
                              <h1 className="text-lg text-secondary font-semibold">
                                {bookData.bookName}
                              </h1>
                            </FlexCenter>
                          </FlexColCenter>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </>
        )
      })}
    </>
  )
}

export default BookDetail
