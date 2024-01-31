import React from 'react'
import down from '../image/down.svg'
import rasm1 from '../image/img.svg'
import AbautCard from './AbautCard'
import '../style/Abaut.css'
function Abaut() {
  return (
    <section className='Abaut'>
      <div className="container">
        <p>Home /    Best Seller </p>
        <div className="abautCard__text">
          <span>Sort by</span>
          <span><img src={down} alt="" /></span>
        </div>
        <div className="AbautCard__wrapper">
          <AbautCard   img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00" span="NEW"/>
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00" span="SALE"/>
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00 " /> 
          
        </div>
        <div className="AbautCard__wrapper">
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00" span="NEW"/>
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00" span="SALE"/>
          <AbautCard   img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00 "/> 
          
        </div>
        <div className="AbautCard__wrapper">
          <AbautCard span="NEW" img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00" />
          <AbautCard span="SALE" img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00"/>
          <AbautCard   img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00 " /> 
          
        </div>
         <div className="AbautCard__wrapper">
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00"/>
          <AbautCard  img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00"/>
          <AbautCard img={rasm1}  title="Your Skin But Better CC+ Cream with SPF50 12ml " text="+ Quick Shop" price="$28.00 " /> 
          
        </div>
        <div className="abaut__text">
          <p>Showing 16 of 23</p>
          <button>load more</button>
        </div>
      </div>
    </section>
  )
}

export default Abaut
