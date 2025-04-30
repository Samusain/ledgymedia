// import Slider from './Slider/Slider.jsx';
// import './Main.css'
import HeroSection from '../HeroSection/HeroSection';
import Services from '../Services/Services';
import Results from '../Results/Results';
import Process from '../Process/Process';


const Main = () => {
    return ( 
        <div className="main">
            <HeroSection />
            <Services />
            <Process />
            <Results />
        </div>
     );
}
 
export default Main;