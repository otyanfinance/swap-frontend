import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <div className=" flex items-center justify-center">
        <button
          type="button"
          title="Learn more"
          onClick={openModal}
          className=" border text-oft_neutral_color_shade-1 border-oft_color_2 py-2 px-4 text-sm rounded-xl"
        >
         Learn more
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-y-scroll  max-h-[600px] rounded-md  bg-oft_color_1 text-oft_white_color p-6 text-left align-middle  shadow-3xl transition-all">
                  <div className="flex flex-col justify-center  p-3 gap-3">
                    <div className="  flex flex-col items-center lg:items-start">
                      <p className="text-oft_neutral_color_shade-5 uppercase  text-sm">
                        For retail users
                      </p>
                      <h1 className="flex text-[35px] font-semibold flex-col items-center lg:items-start text-center lg:text-left">
                        Your keys, your coins
                      </h1>
                      <p className="text-normal mt-10 text-oft_neutral_color_shade-4 text-center lg:text-left mb-4">
                        Centralized exchanges, or exchanges run by a centralized
                        entity, custody users’ tokens on their behalf into an
                        intermediary account, and are prone to many attack
                        vectors such as hacks, government intervention, internal
                        mismanagement, frozen withdrawals, bank runs, etc. Due
                        to the unfortunate prevalence of these issues with
                        users’ funds on centralized exchanges, the space had
                        adopted a common mantra: “Not your keys, not your
                        crypto.” This refers to the idea that if you yourself do
                        not have the literal custody of your funds (because a
                        third party is looking over them for you), you can never
                        be completely sure your funds are safe.
                      </p>
                      <p className='className="text-normal my-6 text-oft_neutral_color_shade-4 text-center lg:text-left "'>
                        As a decentralized exchange, Sushi never has control of
                        users’ funds, nor will they ever in the future. The
                        decentralized nature of it means that we do not rely on
                        a third party or an intermediary account; the users are
                        always in full custody of your their tokens, and can
                        exchange with them at any time, without ever having to
                        jump through any hoops or submit any personal
                        information. Stay in full control of your money.
                      </p>
                      <button
                        type="button"
                        title="Learn more"
                        // onClick={() => {
                        //   setModalState(true)
                        // }}
                        className=" border border-oft_color_2 py-2 px-4 text-sm rounded-xl"
                      >
                        Visit Swap
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
