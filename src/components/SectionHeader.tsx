import React from "react"

type Props = {
  title: string
  subtitle: string
}

const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <p className="mt-5 text-center mx-auto max-w-[65ch]">{subtitle}</p>
    </>
  )
}

export default SectionHeader
