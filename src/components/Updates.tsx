import Button from "./Button"
import SectionHeader from "./SectionHeader"

const Updates = () => {
  return (
    <div className="max-w-2xl mx-auto py-20">
      <SectionHeader
        title="Get My Updates"
        subtitle="Never miss an update and stay informed so you can take action
        immediately"
      />

      <div className="px-10 py-20 bg-orange-500/10 mt-10">
        <div className="flex items-center justify-center">
          <input
            type="text"
            className="px-5 py-3 placeholder:text-white bg-zinc-400 text-white outline-none"
            placeholder="Email"
          />
          <Button text="Subscribe" className="rounded-none" />
        </div>
      </div>
    </div>
  )
}

export default Updates
