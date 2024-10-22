import React from 'react'
import './introTemp.css';
import bg from '../../../public/image.png';
import {Link} from 'react-scroll';
import btnImg from '../../../public/hireme.png';


export const IntroTemp = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className ='hello'> Hello there!  </span>
            <span className='introText'>I'm <span className='introName'>Mosa</span> <br/> Technical PM — Design & <br/> Product Thinking </span>
        <p className="introPara">Focused on transforming concepts into successful, user-centered products</p>
        <Link><button className="btn"><img src={btnImg} alt="" className='btnImg'/> Open to collaborations </button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default IntroTemp;
