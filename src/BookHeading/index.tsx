import React from 'react'
import { GrayText } from '@/components/twin/index'

const BookHeading = ({ iconeName, title, bookDetail }: any) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex ">
          <h1 className="text-4xl flex  text-primary font-semibold leading-relaxed mr-2">
            {iconeName}
          </h1>
          <h1 className="text-4xl flex  text-primary font-semibold leading-relaxed">
            {title}
          </h1>
        </div>

        {bookDetail.map((data: any) => {
          return (
            <>
              <GrayText>{data}</GrayText>
            </>
          )
        })}
      </div>
    </>
  )
}

export default BookHeading
