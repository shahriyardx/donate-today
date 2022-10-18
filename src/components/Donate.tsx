import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"
import Button from "./Button"
import SectionHeader from "./SectionHeader"

const Donate = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [amount, setAmount] = useState<number>(100)
  const amountPresets = [100, 200, 500, 1000, 5000]

  return (
    <div className="py-20 grid grid-cols-1 container mx-auto px-5 sm:px-0">
      <SectionHeader
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quibusdam tenetur architecto rem odit, cum incidunt iure dolores quas laboriosam adipisci nemo velit expedita quos explicabo, nulla aperiam aspernatur iste."
        title="Donate Today"
      />

      <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 gap-5 max-w-lg mx-auto">
        {amountPresets.map((preset, index) => (
          <div
            key={index}
            onClick={() => setAmount(preset)}
            className={`rounded-md px-5 py-3 flex justify-center items-center cursor-pointer ${
              preset === amount
                ? "bg-rose-500/10 border-rose-500 border-2"
                : "bg-slate-100"
            }`}
          >
            {preset}tk
          </div>
        ))}
      </div>

      <div className="max-w-lg w-full mx-auto mt-10">
        <input
          type="number"
          placeholder="Other amount"
          value={amount}
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full text-center outline-none py-3 border-b-2"
        />
      </div>

      <div className="mt-10 max-w-lg mx-auto">
        <Button text="Donate Now" onClick={openModal} />
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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Are you sure?
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Once you pay, you won't be able to get any refund from us.
                      Still want to proceed?
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Donate
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default Donate
