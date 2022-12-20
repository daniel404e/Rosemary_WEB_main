import Heading from '@/components/Heading'
import React from 'react'
import { oneArray } from '@/constants/booksDatad'
import tw from 'twin.macro'
import { Space } from '@/components/twin'

const Books = () => {
  const TH = tw.th`text-lg text-white px-6 py-4 text-left`
  const TD = tw.td`text-sm   px-6 py-4 whitespace-nowrap`
  return (
    <div className="max-w-7xl mx-auto">
      <Heading first={'Text'} second={'Books'} third={'Details'} />
      <Space />

      <div className="grid overflow-hidden grid-cols-3 grid-rows-8 gap-8">
        {oneArray &&
          oneArray.map((item, index) => (
            <div
              key={index}
              className="py-2 inline-block min-w-full sm:px-6 lg:px-8"
            >
              <div className="overflow-hidden">
                <table className="min-w-[400px] w-full shadow  border border-blue-gray-200 ">
                  <thead className="bg-white border-b">
                    <tr className="bg-secondarylight">
                      <TH scope="col">{item.name}</TH>
                    </tr>
                  </thead>
                  <tbody>
                    {item.list.map((data, i) => (
                      <tr
                        key={i}
                        className={` ${
                          Number(data) > 0 ? 'bg-primarylight' : 'bg-white'
                        } border-b transition duration-300 ease-in-out hover:bg-gray-100`}
                      >
                        {Number(item) > 0 ? (
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {data}
                          </td>
                        ) : (
                          <TD
                            className={
                              Number(data) > 0
                                ? 'text-white hover:text-gray-600 font-bold '
                                : 'text-gray-900 font-light'
                            }
                          >
                            {Number(data) > 0 && ''}
                            {data}
                          </TD>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Books
