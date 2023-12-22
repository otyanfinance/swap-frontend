'use client'
import React, {useState} from 'react'
import Hero from './Hero'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import ContactFormSection from './Contact'
import Modal from './Modal'

function HomeComponent() {
  const [modalState, setModalState] = useState(false)
  const handleClose = () => {
    if (modalState) setModalState(false)
  }
  return (
    <div className="flex flex-col flex-1">
      <article className="w-full lg:my-20">
        <section className="relative">
          <div className="w-full mx-auto max-w-5xl px-4 ">
            <Hero />
          </div>
        </section>
        <section className="overflow-x-hidden text-oft_white_color">
          <div className="w-full  max-w-5xl px-4 pt-10 mx-auto">
            <div className="grid grid-cols-2 md:flex md:justify-between my-[120px] gap-10">
              <div className="flex items-center gap-3 px-6 lg:px-0">
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-3xl font-semibold">$1.17</span>
                  <span className="text-xs font-medium uppercase text-neutral-400 -mt-0.5">
                    Price
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 lg:px-0">
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-3xl font-semibold">$1.17</span>
                  <span className="text-xs font-medium uppercase text-neutral-400 -mt-0.5">
                    Price
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 lg:px-0">
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-3xl font-semibold">$1.17</span>
                  <span className="text-xs font-medium uppercase text-neutral-400 -mt-0.5">
                    Price
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 px-6 lg:px-0">
                <div className="flex flex-col justify-center gap-1">
                  <span className="text-3xl font-semibold">$1.17</span>
                  <span className="text-xs font-medium uppercase text-neutral-400 -mt-0.5">
                    Price
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div
          role="none"
          className="shrink-0 bg-gray-900/5 dark:bg-slate-200/5 h-[1px] w-full"
        ></div>
        <section>
          <div className="py-20 text-oft_white_color sm:py-20 px-4 bg-gradient-to-b from-secondary to-transparent">
            <div className="w-full max-w-5xl px-4 mx-auto space-y-20">
              <div className="flex flex-col items-center text-center  mx-auto">
                <h1 className="text-[40px] font-medium ">1207 Days.</h1>
                <h5>
                  Ever since the inception of Sushi, our journey has been
                  enriched by the invaluable connections we ve forged. As we
                  pave the way towards the Future of Finance, we want to express
                  our deep gratitude to the incredible community of friends and
                  supporters who have accompanied us on this remarkable path
                </h5>
              </div>
              <div className="flex flex-col text-sm uppercase gap-y-10">
                <div className="flex flex-wrap items-center justify-center gap-10">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-10">
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-10 h-10"
                      src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                      alt="metamask"
                    />
                    <p className="font-medium">Meta mask</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20  text-oft_white_color sm:py-40">
          <div className="w-full max-w-5xl mx-auto px-4 space-y-20">
            <div className="grid  grid-cols-1 lg:grid-cols-2 justify-center gap-[100px]">
              <div className="w-[250px] mx-auto h-[250px] relative lg:w-[420px] lg:h-[420px]  sm:left-0">
                <span>
                  <img
                    alt="Phone_1_cajrdn"
                    src="/staticImages/Phone_1_cajrdn.webp"
                  />
                </span>
              </div>
              <div className="flex flex-col justify-center gap-3">
                <div className="  flex flex-col items-center lg:items-start">
                  <h1 className="flex text-[40px] font-semibold flex-col items-center lg:items-start text-center lg:text-left">
                    Your keys, your coins
                  </h1>
                  <h5 className="text-md text-oft_neutral_color_shade-4 text-center lg:text-left mb-8">
                    Own your own crypto, just like cash in your wallet. Fully
                    decentralized & self custody of your funds means your money
                    in your wallet, as it should be.
                  </h5>
                  <Modal />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 text-oft_white_color sm:py-20">
          <div className="w-full max-w-5xl mx-auto px-4 space-y-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-[100px]">
              <div className=" w-[250px] mx-auto h-[250px] relative lg:order-2 lg:w-[420px] lg:h-[420px] sm:left-0">
                <span>
                  <img
                    alt="Phone_1_cajrdn"
                    src="/staticImages/Phone_1_cajrdn.webp"
                  />
                </span>
              </div>
              <div className="flex lg:order-1 flex-col justify-center gap-3">
                <div className="  flex flex-col items-center lg:items-start">
                  <h1 className="flex text-[40px] font-semibold flex-col items-center lg:items-start text-center lg:text-left">
                    Your keys, your coins
                  </h1>
                  <h5 className="text-md text-oft_neutral_color_shade-4 text-center lg:text-left mb-8">
                    Own your own crypto, just like cash in your wallet. Fully
                    decentralized & self custody of your funds means your money
                    in your wallet, as it should be.
                  </h5>
                  <button className=" border border-oft_color_2 py-2 px-4 text-sm rounded-xl">
                    Learn more
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-40 px-4 text-oft_white_color">
          <div className="w-full max-w-5xl mx-auto border border-oft_color_2 p-10 rounded-2xl">
            <div className="flex flex-col gap-20">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-[120px]">
                <div className="order-2 md:order-1 flex flex-col col-span-2 gap-2">
                  <div className="flex mt-4 mb-10  flex-col items-center lg:items-start">
                    <span className="text-hero font-semibold text-center lg:text-left">
                      Need Help?
                    </span>
                    <span className="text-lg text-center lg:text-left mt-2 max-w-[360px]">
                      If you need help or have any questions, contact us on one
                      of our social channels
                    </span>
                  </div>
                  <span className="text-xl font-semibold">Contact Support</span>
                  <span className="text-lg text-oft_muted_text">
                    Join the Sushi Discord community and ask away!
                  </span>
                  <div className="mt-4 text-lg">
                    <a className="flex text-blue-500 items-center gap-4 cursor-pointer group py-2">
                      <FaTwitter className="w-5 h-5 " />
                      <span className="text-normal font-medium text-blue group-hover:text-blue-300">
                        Follow us on Twitter
                      </span>
                    </a>
                    <a className="flex text-blue-500 items-center gap-4 cursor-pointer group py-2">
                      <FaGithub className="w-5 h-5 " />
                      <span className="text-normal font-medium text-blue group-hover:text-blue-300">
                        Code on Github
                      </span>
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2 col-span-2">
                  <ContactFormSection />
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}

export default HomeComponent
