import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/cat.jpg'
import Portfolio2 from '../../assets/cat.jpg'
import Portfolio3 from '../../assets/cat.jpg'
import Portfolio4 from '../../assets/cat.jpg'
import Portfolio5 from '../../assets/cat.jpg'
import Portfolio6 from '../../assets/cat.jpg'

const Works = () => {
  return (
    <section id="works">
        <h2 className='worksTitle'>My Portfolio</h2>
        <span className='worksDesc'>I take pride in paying attention to the smallest details</span>
        <div className='worksImgs'>
            <img src={Portfolio1} alt="worksImg" className='workImg'/>
            <img src={Portfolio2} alt="worksImg" className='workImg'/>
            <img src={Portfolio3} alt="worksImg" className='workImg'/>
            <img src={Portfolio4} alt="worksImg" className='workImg'/>
            <img src={Portfolio5} alt="worksImg" className='workImg'/>
            <img src={Portfolio6} alt="worksImg" className='workImg'/>
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  );
}

export default Works;