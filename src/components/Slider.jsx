import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import '../style/Slider.css'
import { Pagination } from 'swiper/modules';
// import required modules
// Import Swiper styles
import 'swiper/css';
import SliderItem from "./SliderItem";
import rasm from '../image/img.svg'
import rasm2 from '../image/img3.svg'
import rasm3 from '../image/img4.svg'
import strelka from '../image/strelka.png' 
function Slider() {
  return (
    <section className='Slider'>
     <div className="container">
      <div className="slider__wrapper">
        <h1>Discover our products</h1>
        <div className="strelka__text">
        <p>Shop all</p>
        <img className="strelka" src={strelka} alt="" />
        </div>
        
      </div>
     <Swiper slidesPerView={3} spaceBetween={30}
          modules={[Pagination]} className="mySwiper"   >
        <SwiperSlide>
          <SliderItem   img={rasm} title="Your Skin But Better CC+ Cream with SPF50 12ml"  price="$28.00"    />
        </SwiperSlide>
        <SwiperSlide>
        <SliderItem  img={rasm2} title="KEM DUONG VT CICA - VT CICA CREAM"  price="$28.00 " text="$32.00"  />
        </SwiperSlide>
        <SwiperSlide>
        <SliderItem  img={rasm3} title="Niche Beauty CCC Cream – Niche Beauty"  price="$28.00" />
        </SwiperSlide>
        <SwiperSlide>
        <SliderItem  img={rasm3} title="Niche Beauty CCC Cream – Niche Beauty"  price="$28.00" />
        </SwiperSlide>
        
        
      </Swiper>
     </div>
    </section>
  )
}

export default Slider
