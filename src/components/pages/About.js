import React from "react"
import '../../App.css'
import './About.css'
import Footer from "../Footer"

export default function About() {
  return (<>
    <div className='about'>
      <h1 className='page-title'>About</h1>
      <h1 className='page-description'>Here is a little bit about me.</h1>
    </div>
    <div className='about-text'>
      <p className='paragraph'> Hi! My name is Melanie Lei. I’m currently in my first year, studying computer science at The University of British Columbia. Growing up, I’ve always believed that I would accomplish great things and I hope to carry that mentality with me through my undergraduate years. </p>
      <p className='quote'>A jack of all trades is a master of none, but oftentimes better than a master of one.</p>
      <p className='paragraph'>I’ve tried kung fu, hip-hop, breakdancing, traditional Chinese dance, violin, clarinet, cubing, dice stacking, badminton, ping pong, building a pc, baking, writing, drawing… and honestly, I’m not terrible at any of it, but I’m definitely not a prodigy of any kind. That’s where the second part of the often misquoted idiom comes into play; I cherish each and every one of these learning experiences as they broaden my scope as a person. Ultimately, I believe that each experience shaped me into a more attractive and charming person who people enjoy collaborating with and feel safe and comfortable around. I genuinely enjoy learning and experiencing new things that interest me, whether or not it meaningfully contributes to my overarching journey. Moving forward, I will continue to keep an open perspective and grow as a person, a friend, and a colleague.</p>
    </div>
    <Footer />
  </>)
}