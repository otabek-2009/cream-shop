import React from 'react'
import '../style/SliderItem.css'

function SliderItem({text , img , title, price, span}) {
  return (
    <div className='SliderItem'>
      <div className="container">
      <div className="item__img">
        <img src={img} alt="" />
        <div className="chiziq">
         
        <h5>+ Quick Shop</h5>
        </div>
      </div>
      <h1>{title}</h1>
     <h4>{price}
     <span className='text'>{text}</span>
      </h4>
      
      </div>
    </div>
  )
}

export default SliderItem
