'use client'

import DropDown from '@/dumpComponents/DropDown'
import Link from 'next/link'
import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'

export default function Header() {
  return (
    <div className="w-full py-2 text-oft_white_color  max-w-5xl mx-auto">
      <div className="px-4 sticky flex items-center flex-grow gap-4 top-0 z-50 min-h-[56px] max-h-[56px] h-[56px]">
        <Link href={'/'}>Otyan Fin Tech </Link>
        <div className="flex items-center justify-between flex-grow gap-4">
          <nav
            className="relative  flex max-w-max flex-1 items-center justify-center"
            aria-label="Main"
            dir="ltr"
          >
            <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
              <li className="block md:hidden">
                {/* <DropDown
                  title={
                    <div className=" cursor-pointer whitespace-nowrap inline-flex gap-1 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue hover:bg-secondary focus:bg-accent min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl group bg-oft_color_2 !pr-3">
                      Explore
                      <span>
                        <IoIosArrowDown className="w-3 h-3" />
                      </span>
                    </div>
                  }
                  arrow={false}
                >
                  <div className="">
                    <Link href={'/swap'}>
                      <p className="cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue hover:bg-secondary focus:bg-accent min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl">
                        Swap
                      </p>
                    </Link>
                    <Link href={'/About Us'}>
                      <p className="cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue hover:bg-secondary focus:bg-accent min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl">
                        About Us
                      </p>
                    </Link>
                  </div>
                </DropDown> */}
              </li>
              <li className="hidden md:block">
                <Link href={'/swap'}>
                  <p className="cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue hover:bg-secondary focus:bg-accent min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl">
                    Swap
                  </p>
                </Link>
              </li>
              <li className="hidden md:block">
                <Link href={'/About Us'}>
                  <p className="cursor-pointer whitespace-nowrap inline-flex gap-2 items-center justify-center font-medium disabled:opacity-50 disabled:pointer-events-none ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-blue hover:bg-secondary focus:bg-accent min-h-[40px] h-[40px] py-2 px-4 text-sm rounded-xl">
                    About Us
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
