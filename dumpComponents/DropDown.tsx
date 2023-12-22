'use client'
import {Menu, Transition} from '@headlessui/react'
import {Fragment} from 'react'
import {IoIosArrowUp} from 'react-icons/io'

export default function DropDown({
  children,
  title,
  arrow
}: {
  children: React.JSX.Element
  title: string | React.ReactNode
  arrow: boolean
}) {
  return (
    <Menu
      onMouseLeave={() => {
        console.log('mouse left')
        // close()
      }}
      onMouseEnter={() => {
        console.log('mouse etered')
      }}
      as="div"
      className="relative inline-block    "
    >
      <div className="">
        <Menu.Button className="inline-flex w-full   justify-center   text-sm  ">
          {typeof title === 'string' ? (
            <p className="font-thin   hover:underline-offset-4 hover:decoration-2 sm:hover:underline hover:transition-all hover:delay-700 ">
              {title}
            </p>
          ) : (
            title
          )}

          {arrow && (
            <IoIosArrowUp className="  -mr-1 h-5 w-5 " aria-hidden="true" />
          )}
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
        <div className="border-4 border-red-400">{children}</div>
      </Transition>
    </Menu>
  )
}
