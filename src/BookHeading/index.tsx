import React from 'react'
import { FlexCenter } from '@/components/twin/index'
const BookHeading = ({ iconeName, title }: any) => {
  return (
    <FlexCenter>
      <h1 className="text-4xl flex my-5 text-primary font-semibold leading-relaxed mr-2">
        {iconeName}
      </h1>
      <h1 className="text-4xl flex my-5 text-primary font-semibold leading-relaxed">
        {title}
      </h1>
    </FlexCenter>
  )
}

export default BookHeading
