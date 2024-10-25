import React from 'react'
import './Home.css'
import img8 from '../../../src/images/home_page.png'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({ /*AOS (Animate On Scroll)*/
      duration : 1000
    })
  },[])
  return (
    <>
    <div id='Home' className='home'>
      <div className="home-flex">
        <div className="left-content" data-aos = "fade-down" data-aos-delay= "2000">
          <p>Hello, My name is</p>
          <h1>Arshiya Fathima</h1>
          <h2>And I'm a  <span className="typing"></span></h2>
          <a href="https://drive.google.com/file/d/1Fmr6Wxdnpm7AI2-epUDyr3K3qya6fs9W/view?usp=sharing">Download CV</a>
        </div>
        <div className="right-content" data-aos = "fade-up" data-aos-delay= "2000">
          <img src={img8} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;

