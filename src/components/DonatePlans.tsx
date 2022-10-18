import React from "react"
import SectionHeader from "./SectionHeader"
import { GiFruitBowl, GiGraduateCap } from "react-icons/gi"
import { MdFamilyRestroom } from "react-icons/md"

const DonatePlans = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 px-5">
      <SectionHeader
        title="Our Donate Plan"
        subtitle="We accept donation for various category to help poor people give a decent life"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        <div className="p-5 bg-blue-500/10">
          <GiFruitBowl className="text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">
            Food for a family
          </h3>

          <p className="mt-5 text-xs sm:text-sm">
            We help families get food. So they can stay healthy and work
            properly. Also we share our extra food with them
          </p>
        </div>

        <div className="p-5 bg-rose-500/10">
          <MdFamilyRestroom className="text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">
            Shelter for family
          </h3>

          <p className="mt-5 text-xs sm:text-sm">
            We help homeless people build their own house so they can spend
            their nights safely. We also share our own house in case we need to
          </p>
        </div>

        <div className="p-5 bg-yellow-500/20 sm:col-span-2 md:col-span-1">
          <GiGraduateCap className="text-3xl" />
          <h3 className="text-lg sm:text-xl font-semibold mt-2">
            Education for child
          </h3>

          <p className="mt-5 text-xs sm:text-sm">
            Everyone has a right to take education. So we help people get proper
            education wo can't afford college or school fees
          </p>
        </div>
      </div>
    </div>
  )
}

export default DonatePlans
