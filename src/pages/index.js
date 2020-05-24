import React from "react"

import { Container, Content, Banner, About, Inovation, Footer, Services, Whatsapp, Copyright } from './styles';
import GlobalStyle  from '../styles/reset';
import Logo from '../assets/logo.svg';
import LogoWhite from '../assets/logo-white.svg';
import LogoSenior from '../assets/senior.svg';
import Healthy from '../assets/healthy.svg';
// import ProfessionalMarcela from '../assets/professional-marcela.jpeg';
// import ProfessionalEujessika from '../assets/professional-eujessika.jpg';
import Idea from '../assets/idea.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'



export default function Index() {

  return (
    
    <>
      <GlobalStyle/>
      <Container>
        <Content>
          <img src={Logo} alt="logo" />
          <div>
            <h1>(83) 98112-4179</h1>
            <p>seniorsaudemovel@gmail.com</p>
          </div>
        </Content>
      </Container>
      <Banner>
      <img src={LogoWhite} alt="logo" />
        <div>
          <img src={LogoSenior} alt="logo" />
          <p>Tecnologia para mais cuidados humanizados na melhor idade</p>
          <button>Saiba Mais</button>
        </div>
      </Banner>
      <About>
        <img src={Healthy} alt="healthy"/>
        <div>
          <h1>Sobre</h1>
          <p>A Sênior Saúde Móvel nasceu em Campina Grande, fruto dos projetos de doutorado e mestrado de duas fisioterapeutas: Eujessika Rodrigues e Marcela Pimentel. Entusiastas do universo do envelhecimento humano, as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais inovador, personalizado, humanizado e que estimule a autonomia e a independência do idoso. </p>
        </div>
      </About>

      <Inovation>
        <div>
        <FontAwesomeIcon icon={faCheckSquare} />
          <img src={Idea} alt="ideia" />
          <h1>Inovação</h1>
          <p>Após profunda dedicação em estudos nessa área, a Sênior Saúde Móvel implementou uma estratégia tecnológica aos atendimentos fisioterapêuticos. Desenvolvemos um sistema de monitoramento remoto de idosos, que capta informações do paciente 24h por dia fazendo uso avançado de todo o potencial de relógios e pulseiras inteligentes. Esse serviço auxilia na avaliação continuada, oferecendo dados cruciais para predição de condições adversas à saúde, bem como ajuda na tomada de decisão fisioterapêutica. Idosos em diferentes condições funcionais podem se beneficiar do monitoramento remoto.</p>
        </div>

      </Inovation>

      <Services>


          <h1>Serviços</h1>
          <p>A Sênior Saúde Móvel realiza atendimentos em fisioterapia em gerontologia e fisioterapia neurofuncional para idosos fundamentado em evidências.Os tratamentos realizados baseiam-se nos seguintes pilares: </p>


      <section>
        <div>
          <i className="fa fa-edit"></i>
          <h1>Tratamento Personalizado</h1>
          <p>O idoso é motivado à tornar-se corresponsável da sua evolução terapêutica. O paciente é um componente ativo do seu tratamento. </p>
        </div>

        <div>
            <i className="fa fa-edit"></i>
            <h1>Autogerenciamento</h1>
            <p>A estratégia terapêutica é definida para o nível funcional de cada idoso. Considerando as particularidades de cada indivíduo.</p>
          </div>

          <div>
            <i className="fa fa-edit"></i>
            <h1>Funcionalidade</h1>
            <p>Voltamos nosso olhar para muito além do diagnóstico clínico, focamos a nossa atenção para a queixa funcional  e valorizamos as potencialidades que cada idoso apresenta.</p>
          </div>
      </section>

      </Services>

      <Whatsapp>
          <a href="https://api.whatsapp.com/send?phone=5583981124179&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Saude%20M%C3%B3vel!">
          <i className="fa fa-whatsapp"></i>
          </a>
      </Whatsapp>

      <Footer>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>
        <div>

          <div>
          R Francisco Roberto, nº 108, Centenário, CEP: 58428-222
          </div>
         
        </div>

        
        <Copyright>

        <img src={LogoWhite} alt="logo" />
          <p>Senior Saúde - &copy; {new Date().getFullYear()} Copyright</p>
          </Copyright>

      </Footer>

    </>
  );
}


