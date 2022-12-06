import Heading from '@/components/Heading'
import { Space } from '@/components/twin'

export default function KgCorner() {
  const products = [
    {
      id: 1,
      name: 'Organize Basic Set (Walnut)',
      price: '$149',
      rating: 5,
      reviewCount: 38,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000782-4b4864b487/450/WhatsApp%20Image%202022-03-05%20at%201.35.02%20PM.jpg?ph=e53fdc85c3',

      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 2,
      name: 'Organize Pen Holder',
      price: '$15',
      rating: 5,
      reviewCount: 18,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000778-44d4044d42/450/WhatsApp%20Image%202022-03-05%20at%202.03.06%20PM.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 3,
      name: 'Organize Sticky Note Holder',
      price: '$15',
      rating: 5,
      reviewCount: 14,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000780-5c0815c082/450/WhatsApp%20Image%202022-03-05%20at%201.53.36%20PM.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000781-70d7e70d7f/450/IMG20220302114105.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000779-972ae972af/450/IMG20220303140806.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000783-87ce587ce6/450/IMG20220301121934.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000781-70d7e70d7f/450/IMG20220302114105.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    },
    {
      id: 4,
      name: 'Organize Phone Holder',
      price: '$15',
      rating: 4,
      reviewCount: 21,
      imageSrc:
        'https://e53fdc85c3.clvaw-cdnwnd.com/4e130d1de07e170546cf6e7415c51409/200000781-70d7e70d7f/450/IMG20220302114105.jpg?ph=e53fdc85c3',
      imageAlt: 'TODO',
      href: '#'
    }
    // More products...
  ]
  return (
    <>
      <Heading first={'KG'} second={'Corner'} third={''} />
      <Space />
      <div className="relative overflow-hidden">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                LKG Activities
              </h1>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://images.unsplash.com/photo-1658801956904-43841e89d831?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a2lkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1537440499989-de5f6b6854de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1581726690015-c9861fa5057f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGtpZHMlMjBzY2hvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGtpZHMlMjBzY2hvb2x8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="max-w-7xl mx-auto overflow-hidden sm:px-6 lg:px-8">
          <h1 className="font text-2xl font-bold tracking-tight mt-2 text-gray-900 sm:text-2xl">
            UKG Activities - March 2022
          </h1>

          <div className="-mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="group relative p-4 border-r border-b border-gray-200 sm:p-6"
              >
                <div className="rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
