import React, {useState} from 'react'
import Swap from '../Swap/Swap'
import SwapComponent from '../Swap'
import StaticSwap from '../Swap/staticSwap'

export default function Hero() {
  const [headlineVariable, setHeadlineVaraible] = useState('Whenever')
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[auto_400px] lg:flex justify-between  gap-[40px] lg:gap-[100px]">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-oft_white_color  text-3xl font-bold tracking-tighter md:text-5xl lg:leading-[1.1]">
          Buy and Sell Instantly on Sushi.
          <span className="text-oft_brand_color">{headlineVariable}.</span>
        </h1>
        <p className="scroll-m-20 leading-7 [&:not(:first-child)]:mt-6 text-lg text-oft_muted_text sm:text-xl max-w-[500px]">
          Unlock the world of cryptocurrency trading. Experience the freedom to
          trade over 400 tokens instantly, no registration needed.
        </p>
      </div>
      <div className="relative justify-end ">
        <StaticSwap />
      </div>
    </div>
  )
}
