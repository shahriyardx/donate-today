import { SlideType } from "./HeroSlider"
import Button from "../Button"

const Slide = (props: SlideType) => {
  return (
    <div
      className={`
      ${props.bgClass}
      py-32 flex flex-col items-center justify-center text-white
      bg-cover bg-center px-5
      `}
    >
      <h1
        className="
        capitalize text-center max-w-[20ch] 
        text-4xl font-bold
        "
      >
        {props.title}
      </h1>

      <p className="text-sm max-w-[65ch] text-center mt-3">{props.subtitle}</p>

      <Button text={props.buttonText} className="mt-10" />
    </div>
  )
}

export default Slide
