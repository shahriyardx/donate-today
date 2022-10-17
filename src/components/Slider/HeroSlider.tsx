import { useEffect, useRef, useState } from "react"
import Slide from "./Slide"

export type SlideType = {
  bgClass: string
  title: string
  subtitle: string
  buttonText: string
}

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [slidetimeout, setSlideTimeout] = useState<number>()

  const slides = [
    <Slide
      key="slide1"
      bgClass="bg-[linear-gradient(#ffffff00,#000000b5),url(/images/hero.jpg)]"
      title="Lets help those who are more in need"
      subtitle="Most of the people who live in rural areas are in need of help."
      buttonText="Donate Now"
    />,

    <Slide
      key="slide2"
      bgClass="bg-[linear-gradient(#ffffff00,#000000b5),url(/images/hero1.jpg)]"
      title="spread love across the globe"
      subtitle="People out these need your love. Always be with them"
      buttonText="Donate Now"
    />,

    <Slide
      key="slide3"
      bgClass="bg-[linear-gradient(#ffffff00,#000000b5),url(/images/hero2.jpg)]"
      title="Share extra food with people"
      subtitle="Many people suffer from hunger. Share your extra food with them"
      buttonText="Donate Now"
    />,
  ]

  const startSlide = () => {
    const tm = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1 >= slides.length ? 0 : prev + 1))
      startSlide()
    }, 3000)

    setSlideTimeout(tm)
  }

  useEffect(() => {
    startSlide()
  }, [])

  return (
    <div className="relative">
      {slides[activeSlide]}

      <div className="absolute bottom-5 flex items-center gap-2 left-1/2 -translate-x-1/2">
        {slides.map((slide, index) => (
          <div
            key={slide.key}
            onClick={() => {
              clearTimeout(slidetimeout)
              setActiveSlide(index)
              startSlide()
            }}
            className={`
              ${index === activeSlide ? "bg-white" : "bg-white/50"}
              w-7 h-1 rounded-full cursor-pointer
            `}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default HeroSlider
