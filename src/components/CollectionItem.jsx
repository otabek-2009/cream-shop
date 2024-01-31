import React from 'react'
import '../style/Collection.css'
function CollectionItem({ text , img}) {
  return (
    <div className='CollectionItem'>
     <div className="container">
     <img src={img} alt="" />
      <h4>{text}</h4>
     </div>

    </div>
  )
}

export default CollectionItem
