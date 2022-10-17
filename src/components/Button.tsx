import React from "react"

type Props = {
  text: string
  className?: string
  [key: string]: any
}

const Button = ({ text, className, ...props }: Props) => {
  return (
    <button
      className={`${className} px-5 py-3 bg-rose-500 hover:bg-rose-600 rounded-md`}
      {...props}
    >
      {text}
    </button>
  )
}

export default Button
