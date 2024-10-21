import React from 'react'
import './skills.css'
import UIDesign from '../../assets/cat.jpg'
import WebDesign from '../../assets/cat.jpg'
import AppDesign from '../../assets/cat.jpg'

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skill Desc">I'm a skilled and a passionate Full Stack  Developer with a strong background in C#, ASP .NET Core, Java, NodeJS, AngularJS, Express, MySQL and MongoDB</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UIDesign} alt="UIDesign" className='skillBarImage'></img>
                <div className='skillBatText'>
                    <h2>UIDesign</h2>
                    <p>I'm a skilled and a passionate Full Stack  Developer with a strong background in C#</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebDesign} alt="WebDesign" className='skillBarImage'></img>
                <div className='skillBatText'>
                    <h2>WebDesign</h2>
                    <p>I'm a skilled and a passionate Full Stack  Developer with a strong background in C#</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className='skillBarImage'></img>
                <div className='skillBatText'>
                    <h2>AppDesign</h2>
                    <p>I'm a skilled and a passionate Full Stack  Developer with a strong background in C#</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Skills;