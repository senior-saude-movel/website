import styled from 'styled-components';
import MedicalImg from '../assets/medical.svg'

import { shade } from 'polished';
import InovationBg from '../assets/inovation.svg';

// export const Container = styled.div`
//   color: ${props => props.theme.primary};
// `;

export const Container = styled.header`
  width: 100%;
  height: 80px;
  background: #FFF;
  flex: 1;
  fill: solid;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  position: fixed;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 100%;

  img {
    width: 180px;
  }
  `;

export const Banner = styled.div`
  background: url(${MedicalImg}) no-repeat center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 130vh;
  background-attachment: fixed;
  img {
    width: 500px;
  }

  div {

    background-color: #fff;
    display: flex;
    border-radius: 15px;
    flex-direction: column;
    width: 500px;
    height: 300px;
    justify-content: center;
    align-items: center;


    img {
    width: 180px;
    }


  p {
    font-size: 20px;
    color: #20b3af;
    font-weight: bold;
  }

button {
align-items: center;
justify-content: center;
height: 40px;
width: 150px;
background: #20b3af;
margin: 0 auto;
margin-top: 30px;
font-size: 14px;
color: #fff;
border-radius: 16px;
border: 0;
transition: background-color 0.2s;

&:hover {
  background: ${shade(0.2, '#20b3af')};
}

}
  }`;


export const About = styled.div`
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
    flex: 1;
    height: 300px;
    margin-top: 20px;
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


    }

  }

`


export const Inovation = styled.div`
  background: url(${InovationBg});
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
    }

    p {
      margin: 30px;
      margin-top: 20px;
      flex: 1;
      text-align: justify;
      line-height: 150%;
      color: #000;


    }

  }

`

export const Footer = styled.div`
  flex: 1;
  background-color: #165d72;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 15vh;

  div {
    margin: 0 auto;
    flex: 1;
    background-color: #165d72;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-size: cover;

    img {
      display: flex;
      height: 50px;
      justify-content: center;
      align-items: center;
      color: white;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 20px;
        color: white;
        display: flex;
        margin-left: 10px;
        justify-content: center;
        align-items: center;
      }

    }

    p {
      font-size: 12px;
    }
  }
  `


export const Copyright = styled.p`
    font-size: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    flex: 1;
    background-color: #165d72;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-size: cover;
    font-weight: 200;
  `


 


