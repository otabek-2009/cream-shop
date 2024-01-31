import React from 'react'
import '../style/HeroItem.css'
function HeroItem({title ,text}) {
  return (
    <div className='collectionPage'>
      <div className="container">
       <h1>{title}</h1>
        <p>{text}</p>
        
      </div>
    </div>
  )
}

export default HeroItem
