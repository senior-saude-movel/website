import React from 'react';
import Swiper from 'react-id-swiper';


import Haniot1 from '../assets/active-minutes.png';
import Haniot2 from '../assets/calories.png';
import Haniot3 from '../assets/dashboard-patient.png';
import Haniot4 from '../assets/heart-rate.png';
import Haniot5 from '../assets/sleep.png';
import Haniot6 from '../assets/steps.png';

import AppHaniot1 from '../assets/teste.jpeg';
 
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
          <img src={Haniot4} alt="ss"/>
          </div>
          <div>
          <img src={Haniot5}  alt="ss"/>
          </div>
          <div>
          <img src={Haniot6}  alt="ss"/>
          </div>
          <div>
          <img src={AppHaniot1}  alt="ss"/>
          </div>
          {/* <div>
          <img src={AppHaniot1}  alt="ss"/>
          </div> */}
    </Swiper>
    
  )
}
 
export default SimpleSwiperWithParams;