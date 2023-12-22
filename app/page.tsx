import HomeComponent from '@/components/Home'
import SwapComponent from '@/components/Swap'
import {ConnectButton} from '@/context/Web3Modal'

export default function Home() {
  return (
    <main className=" px-4 sm:px-2 min-h-screen py-8 sm:py-14 lg:py-24">
      <div>
        <HomeComponent />
      </div>
    </main>
  )
}
