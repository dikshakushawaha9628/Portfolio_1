import React from 'react';
import './Home.css';
import Me from '../../assets/mypic.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
import {ReactTyped} from "react-typed";
import Tilt from "react-parallax-tilt"


const Home = () => {
    return (
        <section className="home container" id='home'>
            <div className="intro">
                {/* <img src={Me} alt="" className='home__img' width='120' /> */}
                 <Tilt
          tiltMaxAngleX={45}
          tiltMaxAngleY={45}
          perspective={1000}
          scale={1.1}
          transitionSpeed={1000}
          gyroscope={true}
          className="tilt-wrapper"
        >
          <img id="profile-image" src={Me} alt="Diksha Kushawaha" width='160' />
        </Tilt>
                <h1 className="home__name">Diksha Kushawaha</h1>
                <span className="home__education">
                 I'm a <ReactTyped strings={["Web Developer ","UI-UX Designer ","Coder","Frontend Developer"]} typeSpeed={70} backSpeed={60} loop={true} className='text-primary ' /> 
                 </span>

                <HeaderSocials />

                <a href="#contact" className="btn"> Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    )
}

export default Home