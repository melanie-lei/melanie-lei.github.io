import React from "react"
import '../../App.css'
import Footer from "../Footer"
import Cards from "../Cards"

export default function Projects() {
  return (<>
    <div className='projects'>
      <h1 className='page-title'>Projects</h1>
      <p className='page-description'>I'll have better things here soon, I promise.</p>
    </div>
    <Cards />
    <Footer />
  </>)
}
