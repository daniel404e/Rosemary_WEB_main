import {
  headObject,
  heroLeftObject,
  heroRightObject
} from '@/constants/students_club'
import React from 'react'
import Heading from '../../components/Heading'
import HeadPara from '../../components/HeadPara'
import Hero from '../../components/Hero'
import HeroRight from '../../components/Hero/HeroRight'

const Classes = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Gardening Club      ',
      href: '#',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { name: 'Article', href: '#' },
      imageUrl:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000511-0f2090f20c/700/WhatsApp%20Image%202020-10-10%20at%204.24.51%20PM.jpeg?ph=e53fdc85c3',
      preview:
        'Action based activities like tree plantation, cleanliness drives both within the school campus. Grow kitchen gardens, maintain vermin-composting pits.',
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
      title: 'Eco Club      ',
      href: '#',
      date: 'Mar 10, 2020',
      datetime: '2020-03-10',
      category: { name: 'Video', href: '#' },
      imageUrl:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000512-e821ce821e/700/20190924_093313.jpg?ph=e53fdc85c32',
      preview:
        'Eco Club is a platform on which we got the knowledge about environment, Eco Club in a group who works to contribute to improving environmental conditions and we offer programs & activities to encourage others to reduce pollution, plant trees and also to promote sound environmental behavior.',
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
      title: 'Reading And Drama Club',
      href: '#',
      date: 'Feb 12, 2020',
      datetime: '2020-02-12',
      category: { name: 'Case Study', href: '#' },
      imageUrl:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000513-9333693338/700/20190719_113227.jpg?ph=e53fdc85c31',
      preview:
        'Reading club creates increased confidence in reading and in classroom activities, children feeling that reading clubs help them to improve their reading skills, and raising awareness amongst children of a wider range of written materials',
      author: {
        name: 'Daniela Metz',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        href: '#'
      },
      readingLength: '11 min'
    }
  ]
  return (
    <div className="relative py-16 sm:py-24 lg:py-32">
      <div className="relative">
        <div className="mt-1 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.preview}
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Studentsclubs = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <Heading first="Students" second="Clubs" third="" />
      </div>
      <HeadPara title={headObject.title} description={headObject.description} />
      <Classes />
      <div className="max-w-7xl mx-auto">
        <Hero
          head={heroLeftObject.name}
          para={heroLeftObject.description}
          img={heroLeftObject.img}
        />
        <HeroRight
          head={heroRightObject.name}
          para={heroRightObject.description}
          img={heroRightObject.img}
        />
      </div>
    </div>
  )
}

export default Studentsclubs
