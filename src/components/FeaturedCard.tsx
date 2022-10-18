import React from "react"
import Button from "./Button"

type Props = {
  title: string
  content: string
  reverse?: boolean
  image?: string
}

const FeaturedCard = ({ title, content, reverse, image }: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-10 grid gap-10 grid-cols-1 sm:grid-cols-2">
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold mb-5">{title}</h1>
        <p>{content}</p>

        <Button className="mt-5" text="How to Contribute?" />
      </div>

      <div className={reverse ? "sm:order-[-1]" : ""}>
        <img
          className="w-full aspect-square object-cover"
          src={image}
          alt="image with some peoples"
        />
      </div>
    </div>
  )
}

export default FeaturedCard
