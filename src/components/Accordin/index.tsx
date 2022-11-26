import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react'
import { List } from '../../types/header'

import { useRouter } from 'next/router'

import { FlexColumn } from '../twin'

interface Props {
  list: List
  close: (value: boolean) => void
}

const Accordin = ({ list, close }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const navigateTo = (path: string) => {
    router.push(path)
  }
  return (
    <FlexColumn>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" cursor-pointer flex flex-row justify-between items-center"
      >
        <div className="-m-2 block p-2 font-medium text-gray-900">
          {list.name}
        </div>
        <div className="text-3xl font-bold cursor-pointer">
          {isOpen ? (
            <ChevronUpIcon className="h-6 w-6" />
          ) : (
            <ChevronDownIcon className="h-6 w-6" />
          )}
        </div>
      </div>

      <FlexColumn>
        {isOpen && (
          <FlexColumn className=" my-2 mt-5">
            {list.list.map((item, index) => (
              <div
                onClick={() => {
                  navigateTo(item.href)
                  close(false)
                }}
                key={index}
                className="-m-2 block border-l-2 ml-2 py-3 p-2 text-sm font-medium text-gray-900 hover:text-gray-600 cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </FlexColumn>
        )}
      </FlexColumn>
    </FlexColumn>
  )
}

export default Accordin
