import React from 'react'
import img from '../image/img.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import '../style/FromOur.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import our1 from '../image/our1.png'
import our2 from '../image/our2.jpg'
import our3 from '../image/our3.jpg'

// import required modules
import { Pagination } from 'swiper/modules';
function FromOur() {
  return (
     <section>
     <div className="pdp__swiper1">
      <div className="container">
            <div className="pdp_swiper">
          <div className="csa">
            <p>The results</p>
              <h1>From our customers</h1>
            </div>  

       <Swiper
    slidesPerView={3}
    spaceBetween={30}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
       <img src={our1} alt="" />
    </SwiperSlide>
    <SwiperSlide>
     <img src={our2} alt="" />
    
    </SwiperSlide>
    <SwiperSlide>
    <img src={our3} alt="" />
     
    </SwiperSlide>
    <SwiperSlide>
      <img src={our3} alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img src={our2} alt="" />
    </SwiperSlide>
    <SwiperSlide>
    <img src={our1} alt="" />
    </SwiperSlide>
  </Swiper>
  </div>
       </div>
  </div>
 </section>
  )
}

export default FromOur
