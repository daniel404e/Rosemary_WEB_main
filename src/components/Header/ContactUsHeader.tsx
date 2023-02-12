import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'

export default function ContactUsHeader() {
  const router = useRouter()

  const navigateTo = (path: string) => {
    router.push(path)
  }
  return (
    <div className="bg-indigo-600">
      <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between">
          <div className="md:flex w-0  flex-1 items-center">
            <div className="flex pb-2 md:pb-0">
              <span className="flex rounded-lg ">
                <EnvelopeIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-1 truncate font-medium text-white">
                <span className="inline">rmseoffice@gmail.com</span>
              </p>
            </div>
            <div className="flex pt-4 md:pt-0 md:pl-2">
              <span className="flex rounded-lg ">
                <PhoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <div className="ml-1 truncate font-medium text-white">
                <span className="inline">0462 2901215</span>
              </div>
            </div>
          </div>
          <div className="block md:flex ">
            <div className="cursor-pointer order-3 mt-2 mb-1 md:mb-0 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <div
                onClick={() => navigateTo('/admission/schedule')}
                className=" flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Schedule a Visit
              </div>
            </div>
            <div className="cursor-pointer order-3 md:ml-2 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
              <div
                onClick={() => navigateTo('/about-us/payfees')}
                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
              >
                Pay Fees
              </div>
            </div>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
              <span className="sr-only">Dismiss</span>
              {/* <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
