import React from "react";
import "./About.css";
import Image from "../../assets/mypic.png";
import Resume from "../../assets/resume.pdf";
import AboutBox from "./AboutBox";
import Tilt from "react-parallax-tilt";

const About = () => {
  const downloadResume = async () => {
    window.open(Resume, "_blank");
  };

  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me </h2>

      <div className="about__container grid">
        <div className="box-image">
          <Tilt
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.1}
          transitionSpeed={1000}
          gyroscope={true}
          className="tilt-wrapper"
        >
          <img id="profile-image" src={Image} alt="Diksha Kushawaha" />
        </Tilt>
        </div>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hello! I'm Diksha Kushawaha. I'm pursuing my Btech degree from
              Madan Mohan Malviya University of Technology, Gorakhpur.
              <br />
              <br />
              As I continue my academic journey, I’ve been actively exploring
              and growing in the field of Software Engineering. Lately, my focus
              has been on building real-world projects to strengthen my
              portfolio and improve my skills. I'm also learning how to be a
              strong team player through collaborative work and hands-on
              experiences.
              <br />
              <br />
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="about__list">
              <li>JavaScript (ES6+)</li>
              <li>MERN</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Socket.io</li>
              <li>Figma</li>
            </ul>
            <button className="btn" onClick={downloadResume}>
              Donwload CV
            </button>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
