import React, {  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import rasm2 from '../image/collection1.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import rasm1 from '../image/img4.svg'
import rasm3 from '../image/Mask.png'
import afirm from '../image/afirm.svg'
import '../style/gallary.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

function Gallary() {
     const [thumbsSwiper , setThumbsSwiper] = useState(null);
  return (
    <section className='gallary'>
    <div className="container">
 
        <div className="gallary__grid">

             <div className="gallary__img">
             <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      freeMode={true}
      direction="vertical"
      watchSlidesProgress={true}
      modules={[FreeMode, Navigation, Thumbs]}
      className="mySwiper"
    >
      <SwiperSlide >
       <img id='qwer' src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
       <img id='qwer' src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
      <img  id='qwe' src={rasm2} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
      <img id='qwe' src={rasm3} alt="a" />
      </SwiperSlide>
      
    </Swiper>
    <Swiper 
      spaceBetween={10}
      thumbs={{ swiper: 
        thumbsSwiper && ! thumbsSwiper.destroyed ? thumbsSwiper : null,
    }}
      modules={[FreeMode,  Thumbs]}
      className="mySwiper2"
    >
      <SwiperSlide>
        <img src={rasm2} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm1} alt="a" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rasm3} alt="a" /> 
        </SwiperSlide>
    </Swiper>
             </div>
             <div className="gallary__content">
                  <div className="gallary__wrapper">
                       <h1>Niche Beauty CCC Cream – Niche Beauty</h1>
                       <h3>$28.00</h3>
                       <p>The original, weightless, scentless sunscreen with SPF 55 that leaves a shinny finish.<span>Formulated with the most sensitive and vulnerable in mind, with a custom blend of natural, gentle and hydrating island ingredients mixed with the most effective skincare-grade actives.</span></p>
                       <div className="gallary__cta">
                        <h4>Size<span>     50ml</span></h4>
                        <div className="btn1">

                        <button>1.7 fl oz</button>
                        <button className='btn2'>2.5 fl oz</button>
                        <button  className='btn3'>3.4 fl oz</button>
                        </div>
                       </div>
                       </div>
                       <div className="input__radio">
                <input type="radio" name='radio'/>
                <label htmlFor="">$28.00 One time purchase</label>
              </div>
              <div className="input__radio2">
                <input type="radio" name='radio'/>
                <label htmlFor="">$25.99 Subscribe and save. Details</label>
              </div>
              <div className="btn__teg">
              <div className="qoshish">
                 <ul><li>-</li>1 <li>+</li></ul>
            </div>
                 <button className='AddBtn'>Add to cart - $28.00</button>
              </div>
              <div className="text__item">
                <h6>Starting at $20/mo with <img src={afirm} alt=""/><a href="">Learn more</a></h6>
               </div>
             
               <div className="cards2_2">
                <h6>Use Instruction</h6> <li>+</li>
              </div>
              <div className="cards2_2">
                <h6>Ingredients</h6> <li>+</li>
              </div>
              <div className="cards2_2">
                <h6>Shipping and Returns</h6> <li>+</li>
              </div>
              <div className="cards2_">
                <h6>How to Recycle</h6> <li>+</li>
              </div>
           
                     
                     
                  </div>
             </div>
        </div>
        
        
  </section>
  )
}

export default Gallary
