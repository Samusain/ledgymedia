// import './Main.css'
import Slider from './Slider/Slider.jsx';
import HeroSection from './HeroSection/HeroSection';
import Services from './Services/Services';
import Results from './Results/Results';
import Process from './Process/Process';
import About from './About/AboutScroll.jsx';

const Main = () => {
    return ( 
        <div className="main">
            <HeroSection />
            <Services />
            <Process />
            <Slider />
            <Results />
            <About />
        </div>
     );
}
 
export default Main;