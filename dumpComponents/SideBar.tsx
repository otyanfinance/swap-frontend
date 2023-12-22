'use client'
import React, {useEffect, useRef} from 'react'
import {HiOutlineXMark} from 'react-icons/hi2'
interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (arg: boolean) => void

  children: React.ReactNode
}

function SideBar({sidebarOpen, setSidebarOpen, children}: SidebarProps) {
  const trigger = useRef<any>(null)
  const sidebar = useRef<any>(null)

  useEffect(() => {
    const clickHandler = ({target}: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return
      setSidebarOpen(false)
    }

    document.addEventListener('click', clickHandler)

    return () => document.removeEventListener('click', clickHandler)
  })

  useEffect(() => {
    const keyHandler = ({keyCode}: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return
      setSidebarOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <aside
      ref={sidebar}
      className={`absolute lg:-translate-x-full  left-0  top-0 z-999999 flex h-screen w-[340px] flex-col overflow-y-hidden  bg-white duration-300 ease-linear ${
        sidebarOpen ? 'translate-x-0' : ' -translate-x-full'
      }`}
    >
      <div className="absolute  right-4 top-4 ">
        <button
          type="button"
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block lg:hidden"
        >
          <HiOutlineXMark className="  cursor-pointer w-7  h-7" />
        </button>
      </div>
      <div className="relative flex justify-center top-20">{children}</div>
    </aside>
  )
}

export default SideBar
