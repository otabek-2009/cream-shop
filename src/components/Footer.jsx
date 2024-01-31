import React from 'react'
import "../style/footer.css"
import insta from '../image/insta.svg'
import twitter from '../image/twitter.svg'
import facebook from '../image/facebbok.svg'
import sms from '../image/footer.sms.svg'
function Footer() {
  return (
    <footer className='footer'>
        <div className="foot_1">
          <h2 className='footer_title'>Join the club</h2>
          <p className='foot_p'>Keep up with our new releases, beauty tips and what Winnie’s been up to.</p>
          <input  type="text"placeholder='Email Address' className='input'/>
          <br />
          <div className="cta">
             <div className='radius'>
          <img src={twitter} alt="insta"  className='insta'/>
             </div>
             <div className='radius'>
          <img src={facebook} alt="insta"  className='insta'/>
             </div>
             <div className='radius'>
          <img src={insta} alt="insta"  className='insta'/>
             </div>
          </div>
          <ul className='footer__text'>
            <li>© 2021 Cream Shop</li>
            <li id='text' >Terms and conditions</li>
            <li id='text'>Privacy Policy</li>
          </ul>
        </div>
        <span className='border_left'>
          
        </span>
        <div className="foot_2">
            <div className="cards">
                <h3>Shop</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                 <p>Deepwater</p>  
                 <p>Winne Selects</p>     
            </div>
            <div className="cards">
                <h3>Learn</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                      
            </div>
            <div className="cards">
                <h3>Customer</h3>
                <p>Shop All </p>
                 <p>Best Sellers</p>
                 <p>Universal Mineral</p> 
                 <p>Isie Glow to Isle</p>  
                    
            </div>

        
        </div>
        <img className='qwer' src={sms} alt="" />
    </footer>
  )
}

export default Footer