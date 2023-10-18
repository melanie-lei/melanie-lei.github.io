import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'


function HeroSection() {

  return (
    <div className='hero-container'>
      <h1>Melanie Lei</h1>
      <p className='page-description'>Hi! Welcome to my website (obligatory as a computer science major). Feel free to explore around! This site will be updated as I complete more projects and/or write more mini blog articles. </p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'
        >Contact</Button>
      </div>
    </div>
  )
}

export default HeroSection