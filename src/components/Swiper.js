import React from 'react';
import Swiper from 'react-id-swiper';


import Haniot1 from '../assets/haniot.jpeg';
import Haniot2 from '../assets/haniot2.jpeg';
import Haniot3 from '../assets/haniot3.jpeg';

import HaniotApp1 from '../assets/haniotApp1.jpg';
import HaniotApp2 from '../assets/haniotApp2.jpg';
import HaniotApp3 from '../assets/haniotApp3.jpg';
 
const SimpleSwiperWithParams = () => {
  const params = {
    type: 'bullets',
    effect: 'coverflow',
    slidesPerView: 3,
    loop: true,
    autoplay: true,
    spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10
      }
    }
  }
 
  return(
    <Swiper {...params}>
          <div>
            <img src={Haniot1}  alt="ss"/>
          </div>
          <div>
            <img src={Haniot2}  alt="ss"/>
          </div>
          <div>
            <img src={Haniot3}  alt="ss"/>
          </div>
          <div>
            <img src={HaniotApp1}  alt="ss"/>
          </div>
          <div>
            <img src={HaniotApp2}  alt="ss"/>
          </div>
          <div>
            <img src={HaniotApp3}  alt="ss"/>
          </div>
    </Swiper>
    
  )
}
 
export default SimpleSwiperWithParams;