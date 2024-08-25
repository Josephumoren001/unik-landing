import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import mainImg from '../assets/mainBG.png'
import heroImg from '../assets/woman-face.png'
import ArrowGif from '../assets/ArrowGif.gif'



function SectionMain() {
  return (
    <section className="Main">
        <img src={mainImg} alt="" className="main-img" />

        <div className="hero-text">
            <p className="font-large">Get Good at</p>
            <p className="font-xlarge gradient w-100">Genenerative Creative AI</p>
            <p className="font-normal">Join a global network of over 2 million entrepreneurs and business leaders across 150+ countries. Our courses are designed to help you integrate AI-driven creativity into your business strategy, transforming ideas into impactful results.</p>

            
            <div className="flex-left">
                <img src={ArrowGif} alt="" className="arrow-gif" />
            </div>
            <div className="flex-left">
                <Link to='/waitlist' className="btn-large active">Start Here</Link>
            </div>
            

        </div>

        <div className="hero-img">
            <img src={heroImg} alt="hero" />
        </div>
    </section>
  )
}

export default SectionMain