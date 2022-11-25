import { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CalendarIcon,
  PhotoIcon,
  VideoCameraIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const admission = [
  {
    name: 'Examinations',
    description:
      'Get a better understanding of where your subjects is coming from.',
    href: '#',
    icon: AcademicCapIcon
  },
  {
    name: 'Online Registration',
    description:
      'Apply directly to your registration in a more meaningful way.',
    href: '#',
    icon: GlobeEuropeAfricaIcon
  },
  {
    name: 'Security',
    description: "Your student's data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: Squares2X2Icon
  }
]
const resources = [
  {
    name: 'Image Gallery',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: PhotoIcon
  },
  {
    name: 'Video Gallery',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: VideoCameraIcon
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon
  }
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
import img from '../../images/logo.png'
import Image from 'next/image'
export default function Example() {
  const [dropdown1, setDropdown1] = useState<boolean>(false)
  const [dropdown2, setDropdown2] = useState<boolean>(false)
  return (
    <Popover className="relative bg-white">
      <div
        onMouseEnter={() => {
          setDropdown1(false)
          setDropdown2(false)
        }}
        className="mx-auto max-w-7xl px-4 sm:px-6"
      >
        <div
          onMouseEnter={() => {
            setDropdown1(false)
            setDropdown2(false)
          }}
          className="flex items-center justify-between  border-dark py-2 md:justify-start md:space-x-10"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Your Company</span>
            {/* <img className="h-8 w-auto sm:h-10" src={img} alt="" /> */}
            <Image height={60} width={180} src={img} alt="logo" />
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center  bg-primary p-2 text-white hover:bg-primarylight hover:text-white focus:outline-none ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    onMouseEnter={() => {
                      setDropdown1(true)
                      setDropdown2(false)
                    }}
                    className={classNames(
                      open ? '' : 'text-white',
                      'group inline-flex items-center text-base font-medium hover:text-gray-900 group-hover:text-primarylight focus:outline-none'
                    )}
                  >
                    <span className="text-secondary hover:text-secondarylight">
                      ADMISSIONS
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-secondarylight' : 'text-secondary',
                        'ml-2 h-5 w-5 group-hover:text-primarylight'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    show={dropdown1}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      onMouseLeave={() => {
                        setDropdown1(false)
                      }}
                      className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2"
                    >
                      <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {admission.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start  p-3 group hover:bg-primarylight group-hover:text-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-secondary"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900  group-hover:text-gray-50">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    onMouseEnter={() => {
                      setDropdown2(true)
                      setDropdown1(false)
                    }}
                    className={classNames(
                      open ? '' : 'text-white',
                      'group inline-flex items-center text-base font-medium hover:text-primarylight focus:outline-none'
                    )}
                  >
                    <span className="text-secondary hover:text-primarylight">
                      GALLERY
                    </span>
                    <ChevronDownIcon
                      className={classNames(
                        open ? 'text-secondarylight' : 'text-secondary',
                        'ml-2 h-5 w-5 group-hover:text-primarylight'
                      )}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    show={dropdown2}
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel
                      onMouseLeave={() => setDropdown2(false)}
                      className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0"
                    >
                      <div className="overflow-hidden shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start  p-3 group hover:bg-primarylight group-hover:text-gray-50"
                            >
                              <item.icon
                                className="h-6 w-6 flex-shrink-0 text-secondary"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900 group-hover:text-gray-50">
                                  {item.name}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-20 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50  bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Image height={50} width={140} src={img} alt="logo" />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center  bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none ">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {admission.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 flex items-center  p-3 group hover:bg-primarylight group-hover:text-gray-50"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 text-secondary"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-gray-900  group-hover:text-gray-50">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
