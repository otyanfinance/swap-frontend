import React, {useState} from 'react'
import {IoIosArrowBack} from 'react-icons/io'
import {CiSearch} from 'react-icons/ci'
// import {CiStar} from 'react-icons/ci'
import {blockchainArray, cryptoCurrencyArray} from '@/constants/constants'
export default function SwapSelect({
  handleCurrPage
}: {
  handleCurrPage: (value: swapPageState) => void
}) {
  const _max_token_length = 12
  const [page, setpage] = useState<'main' | 'sub'>('main')

  return (
    <div>
      {/* Swap Header */}
      <div className="  grid ">
        <button
          onClick={() => {
            handleCurrPage('swap')
          }}
          className="flex mb-4 px-2 items-center gap-1"
        >
          <IoIosArrowBack className="w-4 h-4" />
          <p className="capitalize text-[15px]  ">Swap Form</p>
        </button>
        <div className="flex   gap-5">
          <div className="rounded-xl  items-center bg-oft_color_1 flex-1 flex  py-2 px-2 text-sm">
            <input
              className="bg-inherit w-full outline-none"
              placeholder="Search name or paste address"
              type="text"
            />
            <CiSearch className="w-5  h-5 text-gray-300" />
          </div>
          {/* <div>
            <button
              type="button"
              title="swap-show-route"
              role="button"
              className="text-black flex-shrink-0 py-2 px-3 bg-oft_color_1 h-fit rounded-xl   bg-oft_1 "
            >
              <CiStar className="w-6 h-6 text-gray-400" />
            </button>
          </div> */}
        </div>
        {page === 'main' ? (
          <div className="flex gap-5 px-1 ">
            <div className="grid-flow-col py-2 gap-2 lg:w-4/12 grid grid-rows-6">
              {blockchainArray.map(
                ({id, title, value, src}: BlockchainObject) => {
                  if (id < _max_token_length) {
                    return (
                      <button
                        key={id}
                        className="rounded-2xl hover:bg-slate-600 flex flex-col items-center justify-center  h-[50px]  w-[80px] bg-oft_color_1 "
                      >
                        <img
                          alt={value}
                          src="/staticImages/eth.png "
                          className="object-scale-down w-6 h-6 "
                        />
                        <p className=" text-[12px]">{title}</p>
                      </button>
                    )
                  }
                  if (id === _max_token_length) {
                    return (
                      <button
                        onClick={() => {
                          setpage('sub')
                        }}
                        key={id}
                        className="rounded-2xl hover:bg-slate-600 flex flex-col items-center justify-center  h-[50px]  w-[80px] bg-oft_color_1 "
                      >
                        <p className=" text-[17px]">
                          +{blockchainArray.length - _max_token_length + 1}
                        </p>
                      </button>
                    )
                  }
                  return null
                }
              )}
            </div>
            <div className="overflow-scroll p-3 bg-oft_color_1 w-full my-auto rounded-2xl h-[340px]">
              {cryptoCurrencyArray.map(({value, id, title, src}) => {
                return (
                  <button
                    type="button"
                    title={value}
                    className="w-full p-2 rounded-xl hover:bg-slate-600 flex gap-3"
                  >
                    <img
                      src="/staticImages/eth.png"
                      alt={value}
                      className="w-10 h-10"
                    />
                    <div className="text-start">
                      <p className="text-sm">{title}</p>
                      <p className="text-[12px]">{value}</p>
                    </div>
                  </button>
                )
              })}
              <div></div>
            </div>
          </div>
        ) : (
          <div className="overflow-scroll mt-3 p-3 grid grid-cols-3 bg-oft_color_1 w-full my-auto rounded-2xl h-[340px]">
            {blockchainArray.map(({value, id, title, src}) => {
              return (
                <button
                  type="button"
                  title={value}
                  className="w-full p-2 rounded-xl hover:bg-slate-600 flex items-center gap-1"
                >
                  <img
                    src="/staticImages/eth.png"
                    alt={value}
                    className="w-10 h-10"
                  />
                  <div className="text-start">
                    <p className="text-normal font-medium">{title}</p>
                  </div>
                </button>
              )
            })}
            <div></div>
          </div>
        )}
      </div>
    </div>
  )
}
