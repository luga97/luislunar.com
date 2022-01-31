import HeroNav from './HeroNav/HeroNav';
import HeroTitle from "./HeroTitle";
import Lottie from "react-lottie";
import HeroButton from "./HeroButton";
import AnimationData from "../../public/developer-hero.json"

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: AnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Hero = () => (
  <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14">
    <div className="flex flex-wrap lg:flex-nowrap justify-between w-full">
        <HeroNav/>
        <div className="flex flex-wrap grow lg:grow-0 shrink-0 lg:flex-shrink xl:ml-20 justify-center md:justify-center lg:justify-start max-w-xl mt-0 md:my-36">
          <HeroTitle/>
          <HeroButton/>          
        </div>
        <div className="lg:grow">
          <Lottie
            options={defaultOptions}
            />
        </div>
    </div>
  </div>
)

export default Hero;
