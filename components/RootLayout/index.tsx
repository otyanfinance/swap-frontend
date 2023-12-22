import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

export default function RootLayoutWrapper({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className=" bg-oft_color_1 flex flex-col flex-1">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
