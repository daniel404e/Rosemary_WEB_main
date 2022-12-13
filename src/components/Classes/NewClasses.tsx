import React, { useEffect, useRef, useState } from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import useMediaQuery from 'react-responsive'

{
  /* <small className=" py-[1px] font-bold  px-1 text-white  bg-blue-300 ">
                        ownable
                      </small> */
}

// const PricingDate =
import Link from 'next/link'
import { testimonials } from '@/constants/testimonials'
const blogPosts = [
  {
    id: 1,
    title: 'Kids',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '6 min'
  },
  {
    id: 2,
    title: 'Students',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '4 min'
  },
  {
    id: 3,
    title: 'School',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '11 min'
  },
  {
    id: 1,
    title: 'Kids',
    href: '#',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { name: 'Article', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/2781814/pexels-photo-2781814.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
    author: {
      name: 'Roel Aufderehar',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '6 min'
  },
  {
    id: 2,
    title: 'Students',
    href: '#',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    category: { name: 'Video', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/4019754/pexels-photo-4019754.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    author: {
      name: 'Brenna Goyette',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '4 min'
  },
  {
    id: 3,
    title: 'School',
    href: '#',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    category: { name: 'Case Study', href: '#' },
    imageUrl:
      'https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1600',
    preview:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    author: {
      name: 'Daniela Metz',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      href: '#'
    },
    readingLength: '11 min'
  }
]
const NewClasses = () => {
  //
  const small = useMediaQuery({ query: '(max-width:600px)' })
  const medium = useMediaQuery({
    query: '(min-width:600px) and (max-width:960px)'
  })
  const large = useMediaQuery({ query: '(max-width:1024px)' })
  const Xlarge = useMediaQuery({ query: '(min-width:1024px)' })
  // console.log(small, medium, large);
  return (
    <div className={`max-w-7xl mx-auto `}>
      <div id="pricing" className="GradientColor2  w-full text-center py-20 ">
        <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            Learn
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Testimonials
          </p>
          <p className="mt-5 mx-auto max-w-prose text-xl text-gray-500">
            Why choose Rosemary school of excellence
          </p>
        </div>

        <div className="mt-10">
          <CarouselProvider
            naturalSlideWidth={300}
            naturalSlideHeight={
              small ? 400 : medium ? 400 : large ? 400 : Xlarge ? 400 : 400
            }
            step={3}
            totalSlides={testimonials.length}
            visibleSlides={small ? 1 : medium ? 2 : large ? 2 : 3}
            dragEnabled={true}
            touchEnabled={true}
          >
            <Slider>
              {testimonials.map((post, index) => {
                return (
                  <Slide index={index} key={index} className="cursor-pointer">
                    <div
                      key={index}
                      className="flex flex-col mx-5 min-h-[400px] rounded-lg shadow-lg overflow-hidden"
                    >
                      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                        <div className="flex-1">
                          <p>{post.name}</p>
                          <span className="block mt-2">
                            <p className="text-xl font-medium text-gray-900">
                              {post.remark}
                            </p>
                            <p className="mt-3 text-base text-gray-500">
                              {post.address}
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Slide>
                )
              })}
            </Slider>
          </CarouselProvider>
        </div>
      </div>
    </div>
  )
}

export default NewClasses
