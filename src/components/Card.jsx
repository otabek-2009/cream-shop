import React from 'react'
import '../style/Card.css'
import cart1 from '../image/cart1.svg'
import cart2 from '../image/cart2.svg'
import cart3 from '../image/cart3.svg'
import cart4 from '../image/cart4.svg'
function Card() {
  return (
    <section className='card'>
      <div className="container">
       <div className="card__wrapper">
        <h4>Why brand name?</h4>
        <h5>Sed ut perspiciatis unde omy</h5>
        <h2>At vero eos et accusamus et iusto odio dignissimos</h2>
       </div>
       <div className="card__cart">
        <div>
 <img src={cart1} alt="" />
 <li>Lorem ipsum</li>
 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
        </div>
        <div>
 <img src={cart2} alt="" />
 <li>Sed ut perspiciatis unde</li>
 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
        <div>
 <img src={cart3} alt="" />
 <li>Ut enim ad minim</li>
 <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
        </div>
        <div>
 <img src={cart4} alt="" />
 <li>At vero eos eaccusamus</li>
 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
        </div>
       </div>
      </div>
    </section>
  )
}

export default Card
