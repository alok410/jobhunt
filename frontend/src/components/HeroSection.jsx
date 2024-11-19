import React from 'react'
import "./Herosection.css"

function HeroSection() {
  return (
    <>
    <div className='mainbody'>

    <div className='maindiv'>
        <h1>No. 1 jub hunt website</h1>
        <h1>search, apply <br />get your <span>Dream job </span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat harum odit porro. Qui, maxime doloremque? </p>
    </div>
    <div style={{marginLeft:"350px"}}>
        <input type="text" placeholder='find your job' />
        <button>search</button>
    </div>
   </div>
    </>
  )
}

export default HeroSection