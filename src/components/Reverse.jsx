import React from 'react'
import '../style/Reverse.css'
import reverse from '../image/reverse.png'
import row from '../image/row.png'
import banner from '../image/banner.png'
import abaut1 from '../image/abaut1.png'
import abaut2 from '../image/abaut2.svg'
import abaut3 from '../image/abaut3.svg'
import abaut4 from '../image/abaut4.svg'
function Reverse() {
  return (
     <main>

    <section className='Reverse'>
     <div className="container">
      <div className="reverse__wrapper reverse ">
          <div className="reverse__img">
         <img src={reverse} alt="" />
          </div>
          <div className="reverse__content ">
          <h2>Neque porro quisquam est, qui dolorem</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <h5 href="">Ingredient glossary</h5>
          </div>
          
      </div>
     </div>
     
    </section>
    <section className='Reverse'>
     <div className="container">
      <div className="reverse__wrapper column ">
          <div className="reverse__img">
         <img src={row} alt="" />
          </div>
          <div className="reverse__content ">
          <li href="">Our story</li>
          <h2>Ut enim ad minima</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
          <h6 href="">About Us</h6>
          </div>
          
      </div>
     </div>
     
    </section>
       <section className='modal'>
       <div className="modal__wrapper">
        <img src={banner} alt="" />
       </div>
       <div className="modal_1">
        <h1>Featuring</h1>
        <h2>Sed ut perspiciatis</h2>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
        <button>SHOP NOW</button>
       </div>
       </section>
       <section className='banner'>
        <div className="banner__wrapper">
          <div className='imglar'>
          <h1>Nemo enim ipsam</h1>
          <p>Shop Now</p>
          </div>
          <div className='imglar2'>
          <h1>Temporibus autem</h1>
          <p>Shop Now</p>
          </div>
        </div>
       </section>
       <section className='abaut'>
        <div className="container">
     <h1>Featured</h1>
          <div className="wrapper">
          <div className="abaut__grid">
            <img className='abaut1' src={abaut1} alt="" />
            <img className='abaut2' src={abaut2} alt="" />
            <img className='abaut3' src={abaut3} alt="" />
            <img className='abaut4' src={abaut4} alt="" />
          </div>
          </div>
        </div>
        
       </section>
     </main>
    
  )
}

export default Reverse
