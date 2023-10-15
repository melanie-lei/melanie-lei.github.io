import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import '../App.css'


function HeroSection() {
  return (
    <div className='hero-container'>

      <h1>Melanie Lei</h1>
      <p>Get to know me!</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>GET STARTED</Button>
        <Button className='btns' buttonStyle='btn--outline'
          buttonSize='btn--large'>WATCH TRAILER</Button>
      </div>
    </div>
  )
}

export default HeroSection