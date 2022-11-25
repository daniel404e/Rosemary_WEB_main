import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { List } from '../../types/header'
import { useRouter } from 'next/router'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}
interface Props {
  list: List
  // add void to the function
}
export default function Example({ list }: Props) {
  const router = useRouter()
  // create a function to navigate to another page
  const navigateTo = (path: string) => {
    router.push(path)
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  bg-white px-4 py-2 text-sm font-medium text-gray-700 ">
          {list.name}
          <ChevronDownIcon className="-mr-1 ml-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {list.list.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <div
                    onClick={() => {
                      navigateTo(item.href)
                    }}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    {item.name}
                  </div>
                )}
              </Menu.Item>
            ))}
            {/*             
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Account settings
                </a>
              )}
            </Menu.Item>
            */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
