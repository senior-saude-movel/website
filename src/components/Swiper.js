import React from "react"
import Swiper from "react-id-swiper"

import { SwiperItem } from "./styles"
// import AppLogin from "../assets/app/login.png"
// import AppBloodPressure from "../assets/app/blood.pressure.png"
// import AppDashboard from "../assets/app/dashboard.png"
import WebDashboard from "../assets/web/dashboard.png"
import WebActivities from "../assets/web/activities.png"
import WebSteps01 from "../assets/web/steps.01.png"
import WebSteps02 from "../assets/web/steps.02.png"
import WebActivity from "../assets/web/activities.png"
import WebActivityDetails from "../assets/web/activity.details.png"
import WebMeasurements from "../assets/web/measurements.png"
import WebMeasurements02 from "../assets/web/measurements.png"
import WebVariability from "../assets/web/heart.rate.variability.png"
import WebVariabilityDetails from "../assets/web/heart.rate.variability.details.png"
import WebWeight01 from "../assets/web/weight.01.png"
import WebWeight02 from "../assets/web/weight.02.png"

const SimpleSwiperWithParams = () => {
  const params = {
    type: "bullets",
    effect: "coverflow",
    slidesPerView: 1,
    loop: true,
    autoplay: true,
    spaceBetween: 80,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  }

  return <Swiper {...params}>

    <SwiperItem>
      <img src={WebDashboard} alt="Página do dashboard do paciente da aplicação web"/>
    </SwiperItem>

    {/*<SwiperItem>*/}
    {/*  <img src={AppLogin} alt="Página de login do aplicativo mobile"/>*/}
    {/*</SwiperItem>*/}

    <SwiperItem>
      <img src={WebActivities} alt="Página de atividades físicas do paciente da aplicação web"/>
    </SwiperItem>

    {/*<SwiperItem>*/}
    {/*  <img src={AppBloodPressure} alt="Página de pressão arterial do aplicativo mobile"/>*/}
    {/*</SwiperItem>*/}

    <SwiperItem>
      <img src={WebSteps01} alt="Página de passos do paciente da aplicação web"/>
    </SwiperItem>

    {/*<SwiperItem>*/}
    {/*  <img src={AppDashboard} alt="Página do dashboard d paciente do aplicativo mobile" />*/}
    {/*</SwiperItem>*/}

    <SwiperItem>
      <img src={WebSteps02} alt="Página de passos do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebActivity} alt="Página de atividades físicas do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebActivityDetails} alt="Página de detalhes de uma atividade física do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebMeasurements} alt="Página de medições do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebMeasurements02} alt="Página de medições do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebVariability} alt="Página de variabilidade da frequência cardiáca do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebVariabilityDetails} alt="Página de detalhes da variabilidade da frequência cardiáca do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebWeight01} alt="Página de histórico de peso do paciente da aplicação web"/>
    </SwiperItem>

    <SwiperItem>
      <img src={WebWeight02} alt="Página de histórico de peso do paciente da aplicação web"/>
    </SwiperItem>

  </Swiper>
}

export default SimpleSwiperWithParams
