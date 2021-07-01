import styled from "styled-components"
import MedicalImg from "../assets/medical.svg"

import { shade } from "polished"
import InovationBg from "../assets/inovation.svg"

export const Header = styled.header`
  width: 100%;
  background: #FFF;
  flex: 1;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
  z-index: 1000;
`

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  height: 100%;

  img {
    width: 180px;
  }

  h1, h2, h3 {
    font-weight: bold;
    color: #165d72;
    margin: 5px;
    text-align: center;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 18px;
  }

  h3 {
    font-size: 14px;
  }


  @media screen and (max-width: 600px ) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;

    img {
      width: 150px;
    }
  }

`

export const TextTechnology = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  min-height: 20vh;
  margin-top: 40px;

  h1 {
    margin-top: 10px;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
    color: #165d72;
  }

  p {
    color: #165d72;
    font-size: 20px;
    font-weight: bold;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
    width: 700px;
    text-align: center;
    display: flex;
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    p {
      width: 400px;
    }
  }
`

export const Technologies = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  background-color: #165d72;
  min-height: 50vh;
  border-radius: 14px;
  margin: 10px;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }

  img {
    margin: 25px;
    width: 600px;
    border-radius: 10px
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    img {
      width: 340px;
    }
  }
`

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 30px;
  }
`

export const Banner = styled.div`
  background: url(${MedicalImg}) no-repeat center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #20b3af;
  min-height: 100vh;
  background-attachment: fixed;

  img {
    padding: 20px;
    width: 300px;
  }

  @media screen and (max-width: 768px ) {
    img {
      width: 200px;
    }
  }
`

export const BannerPrimaryImage = styled.div`
  padding: 20px;
  width: 300px;

  @media screen and (max-width: 768px ) {
    margin-top: 150px;
    width: 200px;
  }
`

export const RotatePerspectiveOne = styled.img`
  transform: perspective(400px) rotateY(40deg);
`

export const RotatePerspectiveTwo = styled.img`
  transform: perspective(400px) rotateY(-40deg);
`

export const BannerContent = styled.div`
  background-color: #ffffff80;
  display: flex;
  border-radius: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;

  img {
    width: 150px;
    margin: 10px;
    margin-top: -100px;
    margin-bottom: 0;
  }

  p {
    padding: 5px;
    font-size: 16px;
    color: #20b3af;
    font-weight: bold;
  }

  i {
    font-size: 24px;
  }

  div {
    padding: 5px;
  }

  @media screen and (max-width: 450px ) {
    img {
      display: none;
    }

  }

  @media screen and (min-width: 450px ) and (max-width: 768px ) {
    img {
      width: 100px;
      margin: 0;
      margin-top: -100px;
    }

  }

  @media screen and (min-width: 1366px ) {
    img {
      width: 250px;
    }

  }

`

export const About = styled.div`
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 45vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  border-spacing: 15px;

  img {
    height: 300px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 30px;

    h1 {
      font-weight: bold;
      font-size: 30px;
      color: #000;
      flex: 1;
    }

    p {
      margin-top: 20px;
      flex: 1;
      text-align: justify;
      color: #000;
      font-weight: bold;
    }


  }

  @media screen  and (max-width: 768px ) {
    flex-direction: column;
  }

`

export const Innovation = styled.div`
  background: url(${InovationBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 60vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  border-spacing: 15px;

  img {
    height: 50px;
    margin-top: 20px;
  }

  div {
    opacity: 0.9;
    border-radius: 2%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    margin: 30px;

    h1 {
      text-align: center;
      font-weight: bold;
      font-size: 30px;
      color: #000;
      flex: 1;
      margin: 30px;
    }

    p {
      margin: 30px;
      margin-top: 20px;
      flex: 1;
      text-align: justify;
      line-height: 150%;
      width: 600px;
      color: #000;
      font-weight: bold;
    }

  }


  @media screen and (max-width: 768px ) {
    div {
      p {
        font-size: 20px;
        width: 296px;
      }
    }
  }
`

export const Partners = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PartnersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  a {
    padding: 10px 10px;

    img {
      width: 130px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
    }
  }

`

export const PartnersHeader = styled.h1`
  padding-top: 10px;
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  color: #165d72;
`

export const ServicesTop = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 40px;

  div {
    width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
      margin-top: 20px;
      font-weight: bold;
      font-size: 30px;
      color: #165d72;
      padding: 10px;
    }

    p {
      text-align: center;
      font-size: 20px;
      color: #165d72;
      font-weight: bold;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    margin: 30px;

    div {
      width: 400px;

      p {
        text-align: center;
      }
    }
  }

`

export const ServicesBottom = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    margin: 20px;
    padding: 20px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    max-width: 350px;
    border: 1px dashed;
    border-color: #20b3af;
    border-radius: 10px;

    i {
      color: #165d72;
      font-size: 30px;
      margin: 10px;
    }

    h1 {
      font-weight: bold;
      color: #165d72;
      font-size: 25px;
      padding: 10px;
    }

    p {
      margin: 10px;
      color: #165d72;
      text-align: justify;
    }

  }


  @media screen and (min-width: 320px) and (max-width: 768px ) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div {
      h1 {
        font-size: 20px;
      }

      p {
        font-size: 20px;

      }
    }
  }
`

export const ProfessionalsTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  color: #165d72;
  margin-bottom: 20px;
  margin-top: 40px;
`

export const Professionals = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 15vh;


  div {
    background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
    flex: 1;
    border-radius: 15px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;

    section {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        border: 1px solid #fff;
        justify-content: center;
        margin: 15px;
        width: 230px;
        border-radius: 10px;
      }

      h1 {

        color: #fff;
        font-size: 22px;
        font-weight: bold;
      }
    }

    p {
      margin: 10px;
      color: #fff;
      text-align: justify;
      font-size: 16px;
      font-weight: bold;
    }

  }

  @media screen and (min-width: 320px) and (max-width: 1024px ) {
    flex-direction: column;

    div {

      flex-direction: column;
      margin: 30px;
      
      section {

        img {
          justify-content: center;
          margin: 20px;
          border-radius: 10px;
        }
      }

      p {
        width: 350px;
        font-size: 15px;
      }

    }

  }
`

export const Footer = styled.div`
  background-color: #165d72;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 15vh;

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    div {

      p {
        font-size: 12px;
      }
    }

  }
`

export const Copyright = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-size: cover;
  background-color: #165d72;

  p {
    font-size: 15px;
    font-weight: bold;
  }
`

export const Whatsapp = styled.div`
  a {
    position: fixed;
    width: 60px;
    height: 60px;
    bottom: 40px;
    right: 40px;
    background-color: #20b3af;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 1px 1px 2px #888;
    z-index: 1000;
  }

  i {
    margin-top: 16px
  }

`

export const MaxWidth = styled.div`
  max-width: 1500px;
  margin: auto;
`

export const Address = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 12px;
  }
`

export const AddressMap = styled.div`
  margin: 5px;
  padding: 5px;
  border-radius: 2%;
  background-color: white;
  border: 1px solid white;
  overflow: hidden;
`

export const SocialNetworks = styled.div`
  margin: 5px;
  padding: 5px;
  border-radius: 2%;

  p {
    font-weight: bold;
  }
`

export const SocialNetworksItem = styled.a`
  margin: 5px;
  width: 24px;
  height: 24px;
`

export const SocialNetworksHeader = styled.h1`
  font-size: 18px;
  padding: 10px;
  font-weight: bold;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BadgesApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 24px;
    text-align: center;
  }
`

export const BadgesAppItem = styled.a`
  img {
    width: 150px;
  }
`

export const NotFoundContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;

  img {
    width: 360px;
  }

  h1 {
    padding: 5px;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 5px;
  }

  h2 {
    padding: 5px;
    font-size: 36px;
    font-weight: bold;
    letter-spacing: 5px;
  }

  p {
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 2px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    img {
      margin-top: 50px;
      width: 300px;
    }

  }
`

export const PrimaryButton = styled.button`
  align-items: center;
  justify-content: center;
  min-height: 40px;
  min-width: 150px;
  background: #20b3af;
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 5px;
  color: #fff;
  border-radius: 10px;
  border: 0;
  transition: background-color 0.2s;
  text-transform: uppercase;

  &:hover {
    background: ${shade(0.2, "#20b3af")};
    cursor: pointer;
  }
`
