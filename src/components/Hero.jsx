import React from 'react'
import '../style/Hero.css'
function Hero( {bgImg,title,text}) {
  return (
    <section className='hero' style={{backgroundImage: `url(${bgImg})`}} >
      <div className="container">
     <h1>{title}</h1>
      <p>{text}</p>
    
      </div>
    </section>
  )
}

export default Hero
