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
  align-items: center;
  justify-content: space-around;
  padding: 0 15px;
  height: 100%;

  img {
    width: 180px;
  }



  div {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: flex;
    h1 {
      font-size: 30px;
      font-weight: bold;
      color: #165d72;
      margin: 5px;
    }

    p {
      font-size: 15px;
      font-weight: lighter;
      color: #165d72;
    }

  }


  @media screen and (min-width: 320px) and (max-width: 768px ) {
    justify-content: space-around;

    img {
      width: 150px;
    }

    div {

      h1{
        font-size: 20px;
      }

      p{
        font-size: 15px;
      }
    }
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
  color: #fff;
  min-height: 130vh;
  background-attachment: fixed;
  img {
    width: 300px;
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
    width: 300px;
    }


  p {
    font-size: 16px;
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


    }

    

  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    flex-direction: column;

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


    }

  }




  @media screen and (min-width: 320px) and (max-width: 768px ) {

    div {
      p {
        font-size: 20px;
        width: 296px;
      }
    }

  }

`

export const Slide = styled.div`
justify-content: center;
display: flex;
align-items: center;

.BrainhubCarousel__arrows {
  background-color: #20b3af;
}

img {
  width: 500px;
  margin-bottom: 30px;
}

button {

}

`

export const Parceiros = styled.div`
display: flex;
justify-content: center;
align-items: center;

img {
  width: 130px;
}

`




export const ServicesTop = styled.div`
  flex: 1;
  flex-direction: column;
  align-items: center;
  display: flex;
  align-items: center;


div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
    h1 {
      margin-top: 20px;
      font-weight: bold;
      font-size: 30px;
    }

    p {
      font-size: 15px;
      font-size: 15px;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 768px ) {
    margin: 30px;

    div {

      p{
        text-align: center;
      }
    }
  }

  `
  


  export const ServicesBottom =styled.div` 
    display: flex;
    flex-direction: row;
  div {
    margin: 50px;
    height: 350px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;

    i {
      color: #165d72;
      font-size: 30px;
      margin: 10px;
    }

    h1 {
      font-weight: bold;
      color: #165d72;
      font-size: 25px;
    }

    p {
      margin: 10px;
      color: #165d72;
      text-align: center;
    }


    &:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.6s;
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

    p{

    }

    img {
      width: 100px;
    }
  `

  export const Whatsapp = styled.div`
      a {
      position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    background-color:#20b3af;
    color:#FFF;
    border-radius:50px;
    text-align:center;
    font-size:30px;
    box-shadow: 1px 1px 2px #888;
    z-index:1000;
    }

    i {
      margin-top:16px
    }

  `

 


