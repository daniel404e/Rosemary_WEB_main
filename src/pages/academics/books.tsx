import Heading from '@/components/Heading'
import React from 'react'
import {FlexColCenter,FlexCenter} from '@/components/twin/index'
import {GoTelescope} from 'react-icons/go'
import {firstBook} from '@/constants/booksData'

const Books = () => {
  return (
    <>
   <Heading first={"Text"} second={'Books'} third={'Details'}/>
  
  <FlexCenter><GoTelescope className='text-4xl flex  text-primary font-semibold leading-relaxed mr-2' /><h1 className='text-4xl flex  text-primary font-semibold leading-relaxed'>First</h1></FlexCenter>
  {firstBook.map((data,index)=>{return(<>
<h1 key={index} className='text-4xl animate-bounce my-5 text-secondary font-semibold leading-relaxed ml-28'>{data.title}</h1>
<div className="grid overflow-hidden items-center text-center lg:grid-cols-5 md:grid-cols-3 grid-cols-1 lg:grid-rows-1 gap-4">
{data.books.map((bookData)=>{return(<>

  <div className="h-52 ml-3 my-5 w-36 relative cursor-pointer mb-5">
<div className="absolute inset-0 bg-white opacity-25 rounded-lg shadow-2xl">
</div>
<div className="absolute inset-0 transform  hover:scale-75 transition duration-300">
  <div className="h-full w-full bg-white  rounded-lg shadow-2xl">
  <FlexColCenter>
<FlexCenter>
<img src='/assest/no-photo.jpg' className='w-40' alt='image' />
</FlexCenter>
<FlexCenter>

<h1 className='text-lg text-secondary font-semibold'>{bookData.bookName}</h1>
  
</FlexCenter>
</FlexColCenter>
  </div>
</div>
</div> 
 
  </>)})}
  </div>
  </>)})}
    </>
  )
}

export default Books


