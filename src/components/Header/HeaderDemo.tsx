import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { XMarkIcon, QueueListIcon } from '@heroicons/react/24/outline'
import img from '../../images/logo.png'
import Image from 'next/image'
import ContactUsHeader from './ContactUsHeader'
import Dropdown from './Dropdown'
import { useRouter } from 'next/router'
import NewAccordin from '../Accordin/NewAccordin'
const navigation = {
  categories: [
    {
      id: 'men',
      name: 'Mean',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt:
            'Drawstring top with elastic loop closure and textured interior padding.'
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.'
        }
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: []
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: []
        },
        {
          id: 'brands',
          name: 'Brands',
          items: []
        }
      ]
    }
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' }
  ]
}

export default function Example() {
  const [open, setOpen] = useState(false)

  const navigate = useRouter()
  const aboutusList = {
    name: 'About Us',
    list: [
      { name: 'Principals corner', href: '/about-us/principals' },
      { name: 'Philosophy', href: '/about-us/philosophy' },
      { name: 'Vision', href: '/about-us/vision' }
    ]
  }
  const academicsList = {
    name: 'Academics',
    list: [
      { name: 'Academic', href: '/academics/academic' },
      { name: 'Curriculum', href: '/academics/curriculum' },
      { name: 'Spotlight', href: '/academics/spotlight' },
      { name: 'Books', href: '/academics/books' },
      { name: 'KG-Corner', href: '/academics/kg-corner' }
    ]
  }
  const admissionsList = {
    name: 'Admissions',
    list: [
      { name: 'Application', href: '/admission/application' },
      { name: 'Enquiry', href: '/admission/enquiry' },
      { name: 'Schedule a Visit', href: '/admission/schedule' }
    ]
  }
  const beyondList = {
    name: 'Beyond Academics',
    list: [
      { name: 'Sports', href: '/beyond-academics/sports' },
      { name: 'Students Clubs', href: '/beyond-academics/studentsclubs' },
      { name: 'Student Senate', href: '/beyond-academics/studentssenate' }
    ]
  } // campus =  computer, library , math , science
  const campusList = {
    name: 'Campus',
    list: [
      { name: 'Computer Lab', href: '/campus/computer' },
      { name: 'Library', href: '/campus/library' },
      { name: 'Math Lab', href: '/campus/math' },
      { name: 'Science Lab', href: '/campus/science' }
    ]
  }
  // create a type interface for aboutusList

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div
            className="fixed inset-0 z-40 flex "
            style={{ justifyContent: 'right' }}
          >
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4"></Tab.List>
                  </div>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 py-3 px-4">
                  <NewAccordin list={aboutusList} />
                </div>
                <div className="space-y-6 border-t border-gray-200 py-3 px-4">
                  <NewAccordin list={academicsList} />
                </div>
                <div className="space-y-6 border-t border-gray-200 py-3 px-4">
                  <NewAccordin list={admissionsList} />
                </div>
                <div className="space-y-6 border-t border-gray-200 py-3 px-4">
                  <NewAccordin list={beyondList} />
                </div>
                <div className="space-y-6 border-t border-gray-200 py-3 px-4">
                  <NewAccordin list={campusList} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {/* <div className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
         <div>
          <p>Email</p>
          <p>Email</p>
          
          </div>
          <p>Phone</p>
          <p>Phone</p>
        </div> */}
        <ContactUsHeader />

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 mt-2">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <Image
                    height={50}
                    onClick={() => navigate.push('/')}
                    width={140}
                    src={img}
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <>
                        {/* <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out'
                              )}
                            >
                            </Popover.Button>
                          </div> */}

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0"
                          enterTo="opacity-100"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-cover object-center"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    </Popover>
                  ))}

                  {/* {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))} */}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {/* Admission */}
                    <Dropdown list={academicsList} />
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Dropdown list={admissionsList} />
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />

                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Dropdown list={beyondList} />
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Dropdown list={campusList} />
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    <Dropdown list={aboutusList} />
                  </a>
                </div>

                <div className="ml-4 flow-root lg:ml-6">
                  <button
                    type="button"
                    className="rounded-md border  bg-white p-2 text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="sr-only">Open menu</span>
                    <QueueListIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
