import React from 'react'

const Heading = ({ first, second, third }: any) => {
  return (
    <div className="text-center mt-10">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        {first}
        <span className="text-primary"> {second}</span>
        {third}
      </h1>
    </div>
  )
}

export default Heading
