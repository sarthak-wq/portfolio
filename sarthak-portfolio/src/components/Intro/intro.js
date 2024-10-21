import React from 'react';
import './intro.css';
import bg from '../../assets/mypicFinal.png';
import btnImg from '../../assets/cat.jpg';
import {Link} from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="intro-container">
            <span className="hello">
                Hello,
            </span>
            <span className="introText">
                I'm <span className="introName">Sarthak</span><br/>Full Stack Developer
            </span>
            <p className="introPara">I'm a Full Stack Developer with a passion for creating<br/> visually stunning and user-friendly websites.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
        </div>
        <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro;