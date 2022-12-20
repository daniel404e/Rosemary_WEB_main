import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
interface Props {
  list: List
}

import React from 'react'
import { List } from '@/types/header'

const Dropdown = ({ list }: Props) => {
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Popover.Group as="nav" className="hidden space-x-10 md:flex">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={classNames(
                open ? 'text-gray-900' : 'text-gray-500',
                'group inline-flex items-center rounded-md bg-white text-xs xl:text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2'
              )}
            >
              {list.name}
              <ChevronDownIcon
                className={classNames(
                  open ? 'text-gray-900 rotate-180' : 'text-gray-400',
                  'ml-2 h-5 w-5 group-hover:text-gray-900 transition-transform'
                )}
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute  z-50 -ml-4 mt-3 w-screen max-w-[300px] transform px-2 sm:px-0  lg:ml-0 lg:-translate-x-1/2">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    {list.list.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-start group rounded-lg p-3 hover:bg-primary "
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600 group-hover:text-white"
                          aria-hidden="true"
                        />
                        <div className="ml-4">
                          <p className="text-base group-hover:text-white font-medium text-gray-900">
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
  )
}

export default Dropdown
