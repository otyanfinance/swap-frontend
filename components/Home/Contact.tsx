'use client'
import React from 'react'
import {FaArrowRight} from 'react-icons/fa'
import {motion} from 'framer-motion'

const ContactFormSection = () => {
  const text =
    'We work closely with passionate teams to provide a holistic and collaborative approach to security. We would love to learn how we can help your team.'
  const formVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {opacity: 0}
  }

  const inputVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    hidden: {opacity: 0, y: 50}
  }
  return (
    <div className="">
      <div className=" relative  text-oft_white_color">
        <motion.form
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          transition={{
            staggerChildren: 2
          }}
          className="space-y-4  relative"
        >
          <motion.div
            variants={inputVariants}
            className=" block mx-auto  lg:w-11/12"
          >
            <label className="flex  pl-[2px] pt-1 text-xs font-semibold uppercase peer-:text-black tracking-[0.14em] f">
              Name
            </label>
            <input
              required
              type="text"
              placeholder="Enter your name "
              className="w-full bg-inherit peer mt-1 font-thin font-sans border-oft_neutral_color_shade-1 outline-none text-sm border-2 border-opacity-50 rounded-md p-2"
            />
            <p className="light text-xs "></p>
          </motion.div>
          <motion.div
            variants={inputVariants}
            className=" block mx-auto lg:w-11/12"
          >
            <div className="flex pl-[2px] pt-1 text-xs font-semibold uppercase group-active:text-black tracking-[0.14em] ''">
              Email
            </div>
            <input
              required
              type="text"
              placeholder="Enter your name "
              className="w-full bg-inherit peer mt-1 font-thin font-sans border-oft_neutral_color_shade-1 outline-none text-sm border-2 border-opacity-50 rounded-md p-2"
            />
            <p className="light text-xs "></p>
          </motion.div>
          <motion.div
            variants={inputVariants}
            className=" block mx-auto lg:w-11/12"
          >
            <div className="flex pl-[2px] pt-1 text-xs font-semibold uppercase tracking-[0.14em] ''">
              Phone
            </div>
            <input
              required
              type="text"
              placeholder="Enter your name "
              className="w-full bg-inherit peer mt-1 font-thin font-sans border-oft_neutral_color_shade-1 outline-none text-sm border-2 border-opacity-50 rounded-md p-2"
            />
            <p className="light text-xs "></p>
          </motion.div>
          <motion.div
            variants={inputVariants}
            className=" block mx-auto lg:w-11/12"
          >
            <div className="flex pl-[2px] pt-1 text-xs font-semibold uppercase tracking-[0.14em] ''">
              Message
            </div>
            <textarea
              required
              placeholder="I'm looking to exchange cripto...."
              className="w-full mt-1 font-thin font-sans   bg-inherit border-oft_neutral_color_shade-1 outline-none text-sm border-2 border-opacity-50 rounded-sm p-2"
              rows={5}
            ></textarea>
            <p className="light text-xs "></p>
          </motion.div>
          <motion.button
            variants={inputVariants}
            type="submit"
            className="bg-blue-500 gap-1 py-[6px] text-white rounded-2xl   mt-5 w-full lg:w-11/12 mx-auto flex items-center  justify-center place-content-center"
          >
            <span className="text-sm">Submit</span>
            <div className="pointer-events-none relative flex items-center gap-[9px]">
              <FaArrowRight className="h-3 w-5   text-white" />
            </div>
          </motion.button>
        </motion.form>
      </div>
    </div>
  )
}

export default ContactFormSection
