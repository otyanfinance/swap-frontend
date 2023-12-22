import SwapComponent from '@/components/Swap'
import {ConnectButton} from '@/context/Web3Modal'

export default function Swap() {
  return (
    <main className=" px-4 sm:px-2 min-h-[100vh] flex flex-col justify-center">
      <div>
        {/* <ConnectButton/> */}

        <SwapComponent />
      </div>
    </main>
  )
}
