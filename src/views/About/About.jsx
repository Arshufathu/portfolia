import React from 'react'
import './About.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <>
    <div id="About" className="about">
      <h1>About me</h1>
      <div className="about-flex" data-aos = "fade-up">       
        <div className="left-content">
        <img src={img9} alt="" />
        </div>
        <div  className="right-content">
        <h2>I'm Arshiya Fathima</h2>
        <p>Hi, my name is Arshiya Fathima and I am a full-stack web developer with modern technologies like React js, JavaScript, CSS, HTML, SQL, Core Java etc.. </p>
        <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer">Hire me</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
