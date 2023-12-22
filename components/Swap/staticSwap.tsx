'use client'
import React from 'react'
import {
  m,
  domAnimation,
  AnimatePresence,
  LazyMotion,
  cubicBezier
} from 'framer-motion'
import {FiRefreshCcw} from 'react-icons/fi'
import {IoSettings} from 'react-icons/io5'
import {MdSwapVert} from 'react-icons/md'
import {MdAltRoute} from 'react-icons/md'
import {IoInformationCircleOutline} from 'react-icons/io5'
import {IoLogoBitcoin} from 'react-icons/io5'
import {FaEthereum} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import Link from 'next/link'

function StaticSwap() {
  const mainvariants = {
    hidden: {
      scale: 1.3,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        scale: {
          duration: 0.5,
          delay: 0.4
        },
        ease: cubicBezier(0.1, 0.2, 0.4, 0.5),
        opacity: {
          duration: 0.2
        }
      }
    }
  }
  const buttonvariants = {
    hidden: {
      scale: 1.04,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'linear',
        delay: 1
      }
    }
  }
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        variants={mainvariants}
        initial="hidden"
        whileInView={'visible'}
        viewport={{once: true}}
        className=" text-white  max-w-2xl px-4 py-2 bg-oft_color_2 rounded-2xl mx-auto"
      >
        <div className="">
          {/* Swap Header */}
          <div className="p-3 flex items-center justify-between">
            <p className="capitalize  ">Swap</p>

            <div className="flex  items-center gap-2"></div>
          </div>

          {/* Swap Body */}
          <div className="bg-oft_color_1 flex flex-col rounded-xl">
            <div className="p-3 md:flex justify-between   md:min-w-[400px] lg:min-w-[500px]">
              <button
                role="button"
                type="button"
                title="swapInputButton1"
                className="flex flex-1 gap-0"
              >
                <div className="flex p-1">
                  <div className="bg-rose-500  rounded-l-2xl p-3">
                    <FaEthereum className="w-8 h-8" />
                  </div>
                  <div className="bg-rose-500 ring-[8px] -left-1 ring-oft_color_1 relative p-3 rounded-full h-fit ">
                    <IoLogoBitcoin className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-start  my-auto ">
                  <p className="capitalize text-sm text-gray-400">chain Name</p>
                  <div className=" flex  items-center">
                    <p className="uppercase text-lg">currency</p>
                    <MdKeyboardArrowDown className="w-6 h-6" />
                  </div>
                </div>
              </button>
              <div className="bg-inherit py-2 flex-1 flex md:justify-end  items-center    outline-none ">
                <p className="text-md font-medium">100.00</p>
              </div>
            </div>

            <div className="bg-oft_color_2 flex justify-center items-center relative h-[2px]">
              <button
                type="button"
                title="swap currency"
                className="bg-oft_color_1 group hover:bg-oft_color_2 hover:border-none border border-oft_color_2 p-1 rounded-full"
              >
                <MdSwapVert className="w-6 h-6 group-hover:text-oft_white_color group-hover:rotate-180 transition-transform ease-linear duration-100 text-gray-400" />
              </button>
            </div>
            <div className="p-3 md:flex  justify-between ">
              <button
                role="button"
                type="button"
                title="swapInputButton1"
                className="flex flex-1   gap-0"
              >
                <div className="flex p-1">
                  <div className="bg-rose-500  rounded-l-2xl p-3">
                    <FaEthereum className="w-8 h-8" />
                  </div>
                  <div className="bg-rose-500 ring-[8px] -left-1 ring-oft_color_1 relative p-3 rounded-full h-fit ">
                    <IoLogoBitcoin className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-start  my-auto ">
                  <p className="capitalize text-sm text-gray-400">chain Name</p>
                  <div className=" flex  items-center">
                    <p className="uppercase text-lg">currency</p>
                    <MdKeyboardArrowDown className="w-6 h-6" />
                  </div>
                </div>
              </button>
              <div className="bg-inherit flex-1 flex  py-2  md:justify-end items-center   md:my-0 outline-none ">
                <p className="text-md font-medium">200.00</p>
              </div>
              <div></div>
            </div>
            {false && (
              <div className="p-3 bg-oft_color_1  ">
                <button
                  role="button"
                  type="button"
                  title="swapInputButton1"
                  className=""
                ></button>
                <input
                  type="text"
                  placeholder="Enter an Ammount"
                  className="bg-inherit text-xl outline-none text-right  "
                />
              </div>
            )}
          </div>

          {/* swap footer */}
          <Link href={'/swap'} className=" py-3 w-full gap-3 flex">
            <m.button
              variants={buttonvariants}
              initial="hidden"
              whileInView={'visible'}
              viewport={{once: true}}
              type="button"
              title="swap-connect-wallet-button"
              role="button"
              className="text-black flex-1 py-2 rounded-2xl  bg-oft_brand_color "
            >
              Trade Now
            </m.button>
          </Link>
        </div>
      </m.div>
    </LazyMotion>
  )
}

export default StaticSwap
