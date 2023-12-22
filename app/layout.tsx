import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import {Web3Modal} from '../context/Web3Modal'
import './globals.css'
import RootLayoutWrapper from '@/components/RootLayout'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Web3Modal',
  description: 'Web3Modal Example'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <body suppressHydrationWarning={true}>
          <RootLayoutWrapper>{children}</RootLayoutWrapper>
        </body>

        {/* <Web3Modal>{children}</Web3Modal> */}
      </body>
    </html>
  )
}
