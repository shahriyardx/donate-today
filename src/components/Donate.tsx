import { useState } from "react"
import Button from "./Button"

const Donate = () => {
  const [amount, setAmount] = useState<number>(100)
  const amountPresets = [100, 200, 500, 1000, 5000]

  return (
    <div className="py-20 grid grid-cols-1 container mx-auto">
      <h1 className="text-3xl font-bold text-center">Donate Today</h1>
      <p className="mt-5 text-center mx-auto max-w-[65ch]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        quibusdam tenetur architecto rem odit, cum incidunt iure dolores quas
        laboriosam adipisci nemo velit expedita quos explicabo, nulla aperiam
        aspernatur iste.
      </p>

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
            {preset}
          </div>
        ))}
      </div>

      <div className="max-w-lg w-full mx-auto mt-10">
        <input
          type="number"
          placeholder="Other amount"
          onChange={(e) => setAmount(parseInt(e.target.value))}
          className="w-full text-center outline-none py-3 border-b-2"
        />
      </div>

      <div className="mt-10 max-w-lg mx-auto">
        <Button text="Donate Now" />
      </div>
    </div>
  )
}

export default Donate
