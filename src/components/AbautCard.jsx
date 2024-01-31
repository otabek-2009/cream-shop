import React from 'react'
import '../style/Abaut.css'
function AbautCard({img , title, span , price , text}) {
  return (
    <div className='abau_t'>
      <div className="abaut1__top">
        <span className='sale__new'>{span}</span>
          <img  src={img} alt="" />
          <div className="border">
               <p>{text}</p>
      </div>
          </div>
      <div className="abaut1__content">
          <h4>{title}</h4>
          <h4>{price}
          </h4>
          
      </div>
    </div>
  )
}

export default AbautCard
