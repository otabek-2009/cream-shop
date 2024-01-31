import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from '../image/collection1.png'
import img2 from '../image/collection2.png'
import strelka from '../image/ste;ka1.png'
import "swiper/css";
import '../style/Collection.css'
// import required modules
// Import Swiper styles
import 'swiper/css';
import '../style/Collection.css'
import CollectionItem from './CollectionItem';
function Collection() {
  return (
    <section className='collection'>
      <div className="container">
        <div className='strelka1'>
        
      <h1>Collections</h1>

      <img src={strelka} alt="" />
        </div>
      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis 
        praesentium voluptatum, Cream Shop</p>

      <div className="collection__card">
      <Swiper className="mySwiper" loop={true}  slidesPerView={2}>
        <SwiperSlide>
         <CollectionItem text="Sed ut perspiciatis" img={img1}/>
        </SwiperSlide>
        <SwiperSlide>
         <CollectionItem text="Lorem ipsum dolor" img={img2}/>
        </SwiperSlide>
        <SwiperSlide>
         <CollectionItem text="Sed ut perspiciatis" img={img2}/>
        </SwiperSlide>
    
        
      </Swiper>
      </div>
      </div>

    </section>
  )
}

export default Collection
