import React from 'react'
import './skills.css'
import UIDesign from '../../../public/ui-design.png';
import WebDesign from '../../../public/website-design.png';
import AppDesign from '../../../public/app-design.png';

export const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle"> What I do </span>
        <span className="skillDesc">Learn all about how to implement font using the API CSS code. A web font is any font used in a website’s design that isn’t installed by default on the end user’s device—a counterpart to a system font. Check out the articles below for more guidance: </span>
        <div className="skillBars">
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
        </div>
    </section>
  )
}

export default Skills
