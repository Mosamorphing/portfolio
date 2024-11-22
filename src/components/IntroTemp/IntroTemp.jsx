import React from 'react'
import './introTemp.css';
import bg from '../../../public/image.png';
import wave from '../../../public/wave.png'; 
import {Link} from 'react-scroll';
// import btnImg from '../../../public/hireme.png';


export const IntroTemp = () => {
  return (
    <section id="intro">
        <div className="introContent">
        <span className='hello'> 
          Hello there! <img src={wave} alt="wave" className="waveIcon" />
        </span>
            <span className='introText'>The name is <span className='introName'>Mosadoluwa</span></span>
            <span className='introText2'>Adventurer, Thinker, Doer.</span>
            <span className='introText3'>As a Product Developer, <br/> <span className='introName2'>I'm at the intersection of people, products, and profits.</span></span>
        <p className="introPara">Below are some of my engagements over the last 24 months.
        </p>
        {/* <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/> Open to collaborations </button></Link> */}
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default IntroTemp;
