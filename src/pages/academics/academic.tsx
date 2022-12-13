import Heading from '@/components/Heading'

/* This example requires Tailwind CSS v2.0+ */
const people = [
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.Safiah Valentina ',
    subject: ' B.Sc.,B.Ed ',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'TGT'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  },
  {
    name: 'Mrs.S.Muthulakshmi',
    subject: 'M.Sc.,B.Ed',
    principal: 'Principal'
  }
  // More people...
]

export default function Academic() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <Heading first={'Our '} second={'Academic '} third={'Team'} />
      <div className="py-16 xl:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-max lg:max-w-7xl mx-auto">
          <div className="relative z-10 mb-8 md:mb-2 md:px-6">
            <div className="text-base max-w-prose lg:max-w-none">
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-primary sm:text-4xl">
                Library for Children
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="relative  md:p-6">
              <div className="lg:grid lg:grid-cols-2 lg:gap-6">
                <div className="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>{' "Learning is a journey, not a destination. "'}</p>
                  <p>
                    The library provides many children with their first chance
                    to use and enjoy a library. The school library is a
                    welcoming place for study and reading. The school library is
                    to support the students and teachers by providing access to
                    current, adequate and appropriate information resources. It
                    is also to ensure that all the students, teachers and staff
                    are effectively using the ideas and information. The library
                    encourages the love of reading and development of students
                    independent learning skills.
                  </p>
                  <br />

                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className=" overflow-hidden border-b  sm:rounded-lg">
            <table className="min-w-full divide-y ">
              <thead className="">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {people.map((person) => (
                  <tr key={person.name}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {person.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {person.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <div className="text-sm text-gray-500">
                          {person.principal}
                        </div>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
