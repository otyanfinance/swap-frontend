'use client'

import {createWeb3Modal, defaultWagmiConfig} from '@web3modal/wagmi/react'
import {useContractRead} from 'wagmi'

import {WagmiConfig} from 'wagmi'
import {arbitrum, mainnet} from 'viem/chains'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '6bffc83f49e7b889f65df13f3cc9c601'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum]
const wagmiConfig = defaultWagmiConfig({chains, projectId, metadata})

// 3. Create modal
createWeb3Modal({wagmiConfig, projectId, chains})

export function Web3Modal({children}: {children: React.ReactNode}) {
  return <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
}

import {useWeb3Modal} from '@web3modal/wagmi/react'
import {useAccount} from 'wagmi'
export function ConnectButton() {
  function OnConnect() {}
  // 4. Use modal hook
  const {open} = useWeb3Modal()
  // const { address, isConnecting, isDisconnected } = useAccount()

  return (
    <div className="flex gap-20">
      <button className="bg-green-500 p-3" onClick={() => open()}>
        Open Connect Modal
      </button>
      <div>
        <button
          className="bg-green-500 ml-20 p-3"
          onClick={() => open({view: 'Networks'})}
        >
          Open Network Modal
        </button>
      </div>
    </div>
  )
}
