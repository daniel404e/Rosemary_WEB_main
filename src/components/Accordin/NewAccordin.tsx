import { Fragment, useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import { List } from '@/types/header'
import { useRouter } from 'next/router'

function Icon({ id, open }: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? 'rotate-180' : ''
      } h-3 w-3 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}
interface Props {
  list: List
}
export default function NewAccordin({ list }: Props) {
  const [open, setOpen] = useState(0)

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value)
  }
  const router = useRouter()
  const navigateTo = (path: string) => {
    router.push(path)
  }
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }
  return (
    <Fragment>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="text-md border-none py-0"
        >
          {list?.name}
        </AccordionHeader>
        <AccordionBody>
          {list &&
            list?.list?.map((item, index) => (
              <div
                onClick={() => {
                  navigateTo(item.href)
                }}
                key={index}
                className="-m-2 gap-2 group flex  border-b-2 ml-2 py-3 p-2 text-sm font-medium text-gray-900 hover:text-gray-600 cursor-pointer"
              >
                <item.icon
                  className={classNames(
                    open ? 'text-gray-900' : 'text-gray-400',
                    'ml-2 h-5 w-5 group-hover:text-primary '
                  )}
                />
                <span className="group-hover:text-primary">{item.name}</span>
              </div>
            ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  )
}
