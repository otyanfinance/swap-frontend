'use client'
import React from 'react'

import {TbMoneybag} from 'react-icons/tb'
import {CiClock1} from 'react-icons/ci'
import {m, motion, domAnimation, LazyMotion} from 'framer-motion'
import {FiRefreshCcw} from 'react-icons/fi'
import {IoSettings} from 'react-icons/io5'
import {MdSwapVert} from 'react-icons/md'
import {IoInformationCircleOutline} from 'react-icons/io5'
import {IoLogoBitcoin} from 'react-icons/io5'
import {FaEthereum} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import DropDown from '@/dumpComponents/DropDown'
import Example from '@/dumpComponents/Accordion'
export default function Swap({
  handleCurrPage
}: {
  handleCurrPage: (value: swapPageState) => void
}) {
  const variants = {
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
      <motion.div className="">
        {/* Swap Header */}
        <div className="p-3 flex items-center justify-between">
          <p className="capitalize  ">Swap</p>

          <div className="flex  items-center gap-2">
            <button
              role="button"
              type="button"
              title="swapInputButton1"
              onClick={() => {}}
              className=""
            >
              <FiRefreshCcw className="w-5   h-5 -translate-y-[3px] text-gray-100" />
            </button>
            <div className="">
              <DropDown
                title={
                  <div className="">
                    <IoSettings className="w-5 h-5 text-gray-100" />
                  </div>
                }
                arrow={false}
              >
                <div className="rounded-2xl w-[300px]  p-2  ">
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Slippage tolerance</p>
                  </div>
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Slippage tolerance</p>
                  </div>
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Slippage tolerance</p>
                  </div>
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Slippage tolerance</p>
                  </div>
                </div>
              </DropDown>
            </div>
          </div>
        </div>

        {/* Swap Body */}
        <div className="bg-oft_color_1 flex flex-col rounded-xl">
          <div className="p-3 md:flex justify-between ">
            <button
              role="button"
              type="button"
              title="swapInputButton1"
              className="flex gap-0"
              onClick={() => {
                handleCurrPage('swapSelect')
              }}
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
            <input
              placeholder="Enter an Ammount"
              className="bg-inherit my-4 md:my-0 outline-none "
            />
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
          <div className="p-3 md:flex justify-between ">
            <button
              role="button"
              type="button"
              title="swapInputButton1"
              className="flex gap-0"
              onClick={() => {
                handleCurrPage('swapSelect')
              }}
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
            {true && <div className="p-3 bg-oft_color_1  ">1000</div>}
          </div>
          <div className="px-3 grid gap-3 mb-4 ">
            <div className="rounded-xl  flex justify-between bg-oft_color_2 p-3">
              <div className="flex gap-1 items-center text-sm">
                <TbMoneybag className="w-4 h-4" />
                <span>2000</span>
              </div>
              <div className="flex gap-1 items-center text-sm">
                <CiClock1 className="w-4 h-4" />
                <span> 6 M</span>
              </div>
            </div>
            <div className="rounded-xl  bg-oft_color_2 p-3">
              <div className=" items-center p-1 text-normal">
                <p className="mx-auto w-fit">Transcation details</p>
              </div>
              <div className="px-3 text-[12px]">
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Minimum Received</p>
                  </div>
                  <p>1.99%</p>
                </div>

                <div className="flex  justify-between items-center">
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className=" w-fit">Price impact</p>
                  </div>
                  <p>1.99%</p>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-1">
                    <IoInformationCircleOutline className="text-oft_success_color_shade-4 w-5 h-4" />
                    <p className="text-[12px] w-fit">Slippage</p>
                  </div>
                  <p>1.99%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* swap footer */}

        <m.div
          variants={variants}
          initial="hidden"
          whileInView={'visible'}
          viewport={{once: true}}
          className=" py-3 w-full gap-3 flex"
        >
          <button
            type="button"
            title="swap-connect-wallet-button"
            role="button"
            className="text-black flex-1 py-2 rounded-2xl  bg-oft_brand_color "
          >
            Connect wallet
          </button>
          {/* <button
              type='button'
              title='swap-show-route'
              role='button'
              className='text-black flex-shrink-0 py-2 px-3 bg-oft_color_1 h-fit rounded-xl   bg-oft_1 '
              >
                <MdAltRoute className='w-6 h-6 text-gray-400' />
              </button> */}
        </m.div>
      </motion.div>
    </LazyMotion>
  )
}
