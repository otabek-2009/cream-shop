import React from 'react'
import '../style/MyCard.css'
import img from '../image/img.svg'
function MyCard() {
  return (
    <section  className='Cardd__herro'>
    <div className="canteyner">
       <div className="Wraper__card">
        
         <h1>My Cart</h1>
         <input type="range" className='ranger'/>
         <p>$12.00 away from Free Shipping</p>

           <div className="Card__kata">
             <div className="opasiti">
              <li className='Product'>Product</li>
              <li className='Price'>Price</li>
               <li className='Quantity'>Quantity</li>
               <li className='Total'>Total</li>

             </div>
         <div className="cards__4">
          <div className="cardcha">
            <img src={img } alt="" />
          </div>
           <div className="card__5">
            <h3>Universal mineral face lotion SPF55</h3>
            <h5>Size: 1.7 fl oz</h5>
            <h5>One Time Purchase</h5>
            <a href="">Remove</a>
           </div>
           <div className="card__6">
            <h5>$28.00</h5>
            <div className="qushish">
                 <ul><li>-</li>1 <li>+</li></ul>
            </div>
            <h5>$28.00</h5>
           </div>
         </div>
         <div className="cards__4">
          <div className="cardcha">
            <img src={img } alt="" />
          </div>
           <div className="card__5">
            <h3>Universal mineral face lotion SPF55</h3>
            <h5>Size: 1.7 fl oz</h5>
            <h5>One Time Purchase</h5>
            <a href="">Remove</a>
           </div>
           <div className="card__6">
            <h5>$28.00</h5>
            <div className="qushish">
                 <ul><li>-</li>1 <li>+</li></ul>
            </div>
            <h5>$28.00</h5>
           </div>
         </div>
         <div className="cards__4">
          <div className="cardcha">
            <img src={img } alt="" />
          </div>
           <div className="card__5">
            <h3>Universal mineral face lotion SPF55</h3>
            <h5>Size: 1.7 fl oz</h5>
            <h5>One Time Purchase</h5>
            <a href="">Remove</a>
           </div>
           <div className="card__6">
            <h5>$28.00</h5>
            <div className="qushish">
                 <ul><li>-</li>2<li>+</li></ul>
            </div>
            <h5>$28.00</h5>
           </div>
         </div>
         <div className="cards__4">
          <div className="cardcha">
            <img src={img } alt="" />
          </div>
           <div className="card__5">
            <h3>Universal mineral face lotion SPF55</h3>
            <h5>Size: 1.7 fl oz</h5>
            <h5>One Time Purchase</h5>
            <a href="">Remove</a>
           </div>
           <div className="card__6">
            <h5>$28.00</h5>
            <div className="qushish">
                 <ul><li>-</li>1 <li>+</li></ul>
            </div>
            <h5>$28.00</h5>
           </div>
         </div>
        <li className='chiziq2'></li>
       </div>
        <div className="input_texst">
          <div className="impurt">
          <label htmlFor="">Order Notes</label>
          <br />
          <div className="input_tayp_text">
            <input type="text" className='Message' placeholder='Type Message...'/>
            
            </div> 
            </div>
            <div className="Qushimcha">
              <ul className='Subtotal'>
                <li>Subtotal</li>
                <li>$112.00</li>
              </ul>
              <li>Shipping and tax calculated at checkout.</li>
              <ul className='Auto'>
                <li>Auto</li>
                <li>-$10.00</li>
              </ul>
              <ul className='Total'>
                <li>Total</li>
                <li>$102.00</li>
              </ul>
              <button className='btn'>Secure Checkout</button>
            </div>
          
        </div>
       </div>
    </div>
   </section>
 
  )
}

export default MyCard
