import React from "react"
import Swiper from "react-id-swiper"
import 'swiper/css/swiper.css'
import { SwiperItem } from "./styles"
import AppLogin from "../assets/app/login.png"
import AppDashboard from "../assets/app/dashboard.png"
import AppActivityDetails from "../assets/app/activity.details.png"
import AppActivities from "../assets/app/activity.png"
import AppBloodPressure from "../assets/app/blood.pressure.png"
import AppHeartRate from "../assets/app/heart.rate.png"
import AppSleep from "../assets/app/sleep.png"
import AppHealth from "../assets/app/health.png"
import AppMeasurement from "../assets/app/measurements.png"
import AppNotifications from "../assets/app/notifications.png"
import AppProfile from "../assets/app/profile.png"
import WebDashboard from "../assets/web/dashboard.png"
import WebActivities from "../assets/web/activities.png"
import WebActivity from "../assets/web/activities.png"
import WebSteps01 from "../assets/web/steps.01.png"
import WebSteps02 from "../assets/web/steps.02.png"
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
    loop: true,
    autoplay: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    lazy: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
  }

  return <Swiper {...params}>

    <SwiperItem>
      <img src={WebDashboard} alt="Página do dashboard do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppLogin} alt="Página de login do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebActivities} alt="Página de atividades físicas do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppDashboard} alt="Página do dashboard do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebSteps01} alt="Página de passos do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppBloodPressure} alt="Página de cadastro de pressão arterial do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebSteps02} alt="Página de passos do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppHealth} alt="Página de diagnósticos do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebActivity} alt="Página de atividades físicas do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppMeasurement} alt="Página de medições do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebActivityDetails} alt="Página de detalhes de uma atividade física do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppNotifications} alt="Página de notificações do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebMeasurements} alt="Página de medições do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppProfile} alt="Página de perfil do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebMeasurements02} alt="Página de medições do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppBloodPressure} alt="Página de cadastro de pressão arterial do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebVariability} alt="Página de variabilidade da frequência cardiáca do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppActivities}
           alt="Página de atividades físicas do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebVariabilityDetails}
           alt="Página de detalhes da variabilidade da frequência cardiáca do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppActivityDetails}
           alt="Página de detalhe de uma atividades físicas do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebWeight01} alt="Página de histórico de peso do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppSleep}
           alt="Página de listagem de registros de sono do paciente do aplicativo mobile" />
    </SwiperItem>

    <SwiperItem>
      <img src={WebWeight02} alt="Página de histórico de peso do paciente da aplicação web" />
    </SwiperItem>

    <SwiperItem>
      <img src={AppHeartRate}
           alt="Página de listagem de registros de frequência cardíaca do paciente do aplicativo mobile" />
    </SwiperItem>

  </Swiper>
}

export default SimpleSwiperWithParams
