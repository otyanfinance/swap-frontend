'use client'
import React, {useState} from 'react'
import Swap from './Swap'
import SwapSelect from './SwapSelect'
import {
  m,
  motion,
  domAnimation,
  AnimatePresence,
  LazyMotion,
  cubicBezier
} from 'framer-motion'
function SwapComponent() {
  const [currPage, setCurrPage] = useState<swapPageState>('swap')
  const handleCurrPage = (value: swapPageState) => {
    setCurrPage(value)
  }

  const mainvariants = {
    hidden: {
      scale: 1.1,
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

  if (currPage === 'swap')
    return (
      <LazyMotion features={domAnimation}>
        <m.div
          variants={mainvariants}
          initial="hidden"
          whileInView={'visible'}
          viewport={{once: true}}
          className=" text-white  max-w-2xl px-4 py-2 bg-oft_color_2 rounded-2xl mx-auto"
        >
          <Swap handleCurrPage={handleCurrPage} />
        </m.div>
      </LazyMotion>
    )
  return (
    <div className=" text-white  max-w-xl px-4 py-2 bg-oft_color_2 rounded-2xl mx-auto">
      <SwapSelect handleCurrPage={handleCurrPage} />
    </div>
  )
}

export default SwapComponent
