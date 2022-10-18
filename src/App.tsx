import Donate from "./components/Donate"
import DonatePlans from "./components/DonatePlans"
import FeaturedCard from "./components/FeaturedCard"
import Footer from "./components/Footer"
import HeroSlider from "./components/Slider/HeroSlider"
import Updates from "./components/Updates"

const App = () => {
  return (
    <div>
      <HeroSlider />
      <Donate />
      <DonatePlans />
      <FeaturedCard
        title="Their livess depend on your donation"
        content="You might think about charity as something you do with the extra change you find lying around, or by supporting a friend running in a local race. That's how we used to feel — until we learned how much even a modest amount of charity can accomplish when given to the right organizations."
        image="/images/featured.jpg"
      />

      <FeaturedCard
        title="They need us to survive"
        content="Most of the people in rural areas suffer hunger, illness and a lot of problem. We need to take action in order to help then so they can handle this situation. If we dont help them, they are going to die of hunger and illness and this is a serious problem of any country. We always need to help those who need"
        image="/images/featured2.jpg"
        reverse
      />

      <Updates />
      <Footer />
    </div>
  )
}

export default App
