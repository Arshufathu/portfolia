import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/TextUtils.png'
import img5 from  '../../images/Portfolio.png'
import img3 from  '../../images/E-CommerceWebsite.png'
import img4 from  '../../images/WeatherApp.png'
import img1 from  '../../images/AlarmClock.png'
import img2 from  '../../images/SimonSaysGame.png'
import img6 from  '../../images/ToDo-App.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id='Project' className='project'>
      <h1>My Projects</h1>
      <div data-aos = "fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            {/* <ProjectBox title = "TextUtils using React" img= {img7} link = "https://github.com/ahmedrohailawan/TextUtils_Using_React_JS"  /> */}
            <ProjectBox title = "Portfolio Website" img= {img5}  />
            <ProjectBox title = " E-Commerce Website" img= {img3}   />
            <ProjectBox title = "Weather App" img= {img4}   />
            {/* <ProjectBox title = " using js" img= {img1} link = "https://github.com/ahmedrohailawan/Alarm-clock-using-javascript"  /> */}
            <ProjectBox title = "Simon-Game using js" img= {img2}   />
            <ProjectBox title = "TODO-APP using js" img= {img6}   />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
