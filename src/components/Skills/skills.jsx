import React from 'react'
import './skills.css'
import UIDesign from '../../../public/ui-design.png';
import WebDesign from '../../../public/website-design.png';
import AppDesign from '../../../public/app-design.png';

export const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle"> About </span>
        <span className="skillDesc">Mosadoluwa is a results-driven intrapreneur with a proven track record of managing and creating user-centred experiences across diverse industries. With a solid background in writing, design and technical domains, he has hands-on experience leading and collaborating with cross-functional AGILE teams.
<br /><br /> His versatile background includes successful stints in the fashion, fintech, design, education, communications, and blockchain industries, making him adept at navigating various sectors to deliver cutting-edge solutions that resonate with users. 
<br /><br />Combining creativity, technical acumen and a deep understanding of customer needs, he drives project, product and business excellence wherever you find him. 
<br /><br />Mosadoluwa has a high EQ and great soft skills such as active listening, empathy, feedback management and the ability to blend in a new environment. These qualities are his secrets to working cross-functionally. Also, he believes no man builds alone and he is big on teamwork. </span>
        {/* <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Deisgn</h2>
                    <p>This is a demo</p>
                </div>
            </div> <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo</p>
                </div>
            </div>
        </div> */}
    </section>
  )
}

export default Skills
