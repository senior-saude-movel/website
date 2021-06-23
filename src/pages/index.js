import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckSquare } from "@fortawesome/free-solid-svg-icons"

import {
  About,
  Address,
  AddressMap,
  BadgesApp,
  BadgesAppItem,
  Banner,
  BannerContent,
  Content,
  Copyright,
  FlexColumn,
  FlexRow,
  Footer,
  Header,
  Innovation,
  MaxWidth,
  Partners,
  PartnersContent,
  PartnersHeader, PrimaryButton,
  Professionals,
  ProfessionalsTitle,
  RotatePerspectiveOne,
  RotatePerspectiveTwo,
  ServicesBottom,
  ServicesTop,
  SocialNetworks,
  SocialNetworksHeader,
  SocialNetworksItem,
  Technologies,
  TextTechnology,
  Whatsapp,
} from "./styles"
import Swiper from "../components/Swiper.js"
import GlobalStyle from "../styles/reset"
import Logo from "../assets/logo.svg"
import LogoWhite from "../assets/logo-white.svg"
import Healthy from "../assets/healthy.jpeg"
import Marcela from "../assets/professionals/marcela.jpg"
import Eujessika from "../assets/professionals/eujessika.jpg"
import LogoNutes from "../assets/logo-nutes.jpg"
import LogoFapesq from "../assets/logo-fapesq.jpg"
import LogoCentelha from "../assets/logo-centelha.jpg"
import Idea from "../assets/idea.svg"
import Instagram from "../assets/social_networks/instagram.svg"
import AppLogin from "../assets/app/login_perspective.png"
import AppDashboard from "../assets/app/dashboard_pespective.png"
import PlayStore from "../assets/play.store.png"
import AppStore from "../assets/app.store.svg"

export default function Index() {

  return <React.Fragment>
    <GlobalStyle />

    <Header>
      <Content>
        <img src={Logo} alt="Sênior Saúde Móvel" />
        <div>
          <h1>Sênior Saúde Móvel</h1>
          <h2>Tecnologia para mais cuidados humanizados na melhor idade</h2>
        </div>
      </Content>
    </Header>

    <Banner>

      <img src={LogoWhite} alt="Sênior Saúde Móvel" />

      <BannerContent>
        <FlexRow>
          <RotatePerspectiveOne src={AppLogin} alt="Aplicativo móvel da Sênior Saúde Móvel" />
          <FlexColumn>
            <PrimaryButton onClick={() => window.open("https://senior.nutes.uepb.edu.br", "_blank")}>
              entrar
            </PrimaryButton>
            <FlexRow>
              <i className="fa fa-whatsapp" />
              <p>(83) 98112-4179</p>
            </FlexRow>
            <FlexRow>
              <i className="fa fa-envelope" />
              <p>seniorsaudemovel@gmail.com</p>
            </FlexRow>
          </FlexColumn>
          <RotatePerspectiveTwo src={AppDashboard} alt="Aplicativo móvel da Sênior Saúde Móvel" />
        </FlexRow>
      </BannerContent>

      <BadgesApp>
        <h1>Disponivéis para as plataformas Android e IOS.</h1>
        <FlexRow>
          <div>
            <BadgesAppItem
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              title="Google Play">
              <img src={PlayStore} alt="Aplicativo sênior saúde móvel para plataforma Android" />
            </BadgesAppItem>
          </div>
          <div>
            <BadgesAppItem
              href="https://www.apple.com/pt/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              title="App Store">
              <img src={AppStore} alt="Aplicativo sênior saúde móvel para plataforma IOS" />
            </BadgesAppItem>
          </div>
        </FlexRow>
      </BadgesApp>

    </Banner>

    <MaxWidth>
      <About id="section_about">
        <img src={Healthy} alt="healthy" />
        <div>
          <h1>Sobre</h1>
          <p>A Sênior Saúde Móvel nasceu em Campina Grande, fruto dos projetos de doutorado e mestrado de duas
            fisioterapeutas: Eujessika Rodrigues e Marcela Pimentel. Entusiastas do universo do envelhecimento humano,
            as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais inovador,
            personalizado, humanizado e que estimule a autonomia e a independência do idoso. </p>
        </div>
      </About>
    </MaxWidth>

    <Innovation id="section_innovation">
      <MaxWidth>
        <FontAwesomeIcon icon={faCheckSquare} />
        <img src={Idea} alt="ideia" />
        <h1 id="innovation">Inovação</h1>
        <p>Após profunda dedicação em estudos nessa área, a Sênior Saúde Móvel implementou uma estratégia tecnológica
          aos atendimentos fisioterapêuticos. Desenvolvemos um sistema de monitoramento remoto de idosos, que capta
          informações do paciente 24h por dia fazendo uso avançado de todo o potencial de relógios e pulseiras
          inteligentes. Esse serviço auxilia na avaliação continuada, oferecendo dados cruciais para predição de
          condições adversas à saúde, bem como ajuda na tomada de decisão fisioterapêutica. Idosos em diferentes
          condições funcionais podem se beneficiar do monitoramento remoto.
        </p>
      </MaxWidth>
    </Innovation>

    <ServicesTop id="section_services">
      <MaxWidth>
        <h1 id="services">Serviços</h1>
        <p>
          A Sênior Saúde Móvel realiza atendimentos em fisioterapia em gerontologia e fisioterapia neurofuncional
          para idosos fundamentado em evidências.Os tratamentos realizados baseiam-se nos seguintes pilares:
        </p>
      </MaxWidth>
    </ServicesTop>

    <MaxWidth>

      <ServicesBottom>
        <div>
          <i className="fa fa-edit" />
          <h1>Tratamento Personalizado</h1>
          <p>
            O idoso é motivado à tornar-se corresponsável da sua evolução terapêutica. O paciente é um componente ativo
            do seu tratamento.
          </p>
        </div>

        <div>
          <i className="fa fa-edit" />
          <h1>Autogerenciamento</h1>
          <p>
            A estratégia terapêutica é definida para o nível funcional de cada idoso. Considerando as particularidades
            de cada indivíduo.
          </p>
        </div>

        <div>
          <i className="fa fa-edit" />
          <h1>Funcionalidade</h1>
          <p>
            Voltamos nosso olhar para muito além do diagnóstico clínico, focamos a nossa atenção para a queixa
            funcional e valorizamos as potencialidades que cada idoso apresenta.
          </p>
        </div>
      </ServicesBottom>

      <ProfessionalsTitle id="professioals">
        Profissionais
      </ProfessionalsTitle>

      <Professionals>
        <div>
          <section>
            <img src={Marcela} alt="Fisioterapeuta Marcela Pinheiro" />
            <h1>Marcela Pimentel</h1>
          </section>

          <p>Mestranda em Ciências e Tecnologia em Saúde pela Universidade Estadual da Paraíba (UEPB). Pós-graduanda em
            Fisioterapia Neurofuncional Adulto e Infantil pela Faculdades Integradas de Patos (FIP). Atualmente, é
            professora universitária na área de neurologia e pesquisadora no Núcleo de Tecnologias Estratégicas em Saúde
            (NUTES) desenvolvendo projetos voltados ao monitoramento remoto de idosos com uso da tecnologia. É membro do
            Laboratório de Neurociências e Comportamento Aplicadas (LANEC/UEPB). Possui ampla experiência no tratamento
            das doenças crônico-neurodegenerativas comuns do envelhecimento.</p>
        </div>

        <div>
          <section>
            <img src={Eujessika} alt="Fisioterapeuta Eujessika Rodrigues" />
            <h1>Eujessika Rodrigues</h1>
          </section>

          <p>Doutoranda pela Universidade Federal do Rio Grande do Norte (UFRN) atuando na linha de pesquisa: avaliação
            e intervenção no processo de envelhecimento. Mestre em Ciências e Tecnologia em Saúde pela Universidade
            Estadual da Paraíba (UEPB). Especialista em Traumato Ortopedia pela Faculdade Nossa Senhora de Lourdes.
            Bacharelado em Fisioterapia pela Universidade Estadual da Paraíba. Atualmente, é pesquisadora no Núcleo de
            Tecnologias Estratégicas em Saúde (NUTES/UEPB) e atua como membro do Grupo de Estudo em Fisioterapia
            Geriátrica e Epidemiologia da UFRN, desenvolvendo projetos baseados em tecnologia para monitoramento remoto
            de idosos.</p>
        </div>
      </Professionals>

      <TextTechnology>
        <h1 id="tecnologies">Tecnologias</h1>
        <p>A Sênior Saúde Móvel dispõe de tecnologias para acompanhamento remoto que vão além das sessões de
          fisioterapia. O paciente é motivado a buscar hábitos de vida mais saudáveis com nossas aplicações e nossa
          equipe presta assistência em tempo real. </p>
      </TextTechnology>

    </MaxWidth>

    <Technologies>
      <Swiper />
    </Technologies>

    <Whatsapp>
      <a
        href="https://api.whatsapp.com/send?phone=5583981124179&text=Ol%C3%A1%2C%20tenho%20interesse%20no%20Saude%20M%C3%B3vel!">
        <i className="fa fa-whatsapp" />
      </a>
    </Whatsapp>

    <Partners>
      <PartnersHeader id="partners">
        Patrocinadores
      </PartnersHeader>
      <PartnersContent>
        <a
          href="http://nutes.uepb.edu.br"
          target="_blank"
          rel="noopener noreferrer"
          title="Núcleo de Tecnologias Estratégicas em Saúde - NUTES">
          <img src={LogoNutes} alt="Logo do Núcleo de Tecnologias Estratégicas em Saúde - NUTES" />
        </a>
        <a
          href="https://programacentelha.com.br"
          target="_blank"
          rel="noopener noreferrer"
          title="Programa Centelha">
          <img src={LogoCentelha} alt="Logo do Programa Centelha" />
        </a>
        <a
          href="http://fapesq.rpp.br"
          target="_blank"
          rel="noopener noreferrer"
          title="Fundação de Apoio à Pesquisa do Estado da Paraíba - FAPESQPB">
          <img src={LogoFapesq} alt="Logo da Fundação de Apoio à Pesquisa do Estado da Paraíba - FAPESQPB" />
        </a>
      </PartnersContent>
    </Partners>

    <Footer>
      <FlexRow>

        <Address>
          <AddressMap>
            <iframe
              title="Endereço da sênior saúde móvel."
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1192784031355!2d-35.9112600492167!3d-7.227233672953821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1e23c2d3a25d%3A0x806a11e20c74d6e1!2sR.%20Francisco%20Roberto%2C%20108%20-%20Centen%C3%A1rio%2C%20Campina%20Grande%20-%20PB%2C%2058428-203!5e0!3m2!1spt-BR!2sbr!4v1624452468748!5m2!1spt-BR!2sbr"
              width="100%"
              allowFullScreen=""
              loading="lazy" />
          </AddressMap>

          <p>Francisco Roberto, nº 108. Centenário, Campina Grande - PB.</p>
          <p>58428-2</p>

        </Address>

        <SocialNetworks>

          <SocialNetworksHeader>
            Siga-nos no instagram.
          </SocialNetworksHeader>

          <FlexRow>
            {/*<SocialNetworksItem*/}
            {/*  href="https://www.youtube.com/watch?v=l44vICFRsww&t=39s&ab_channel=TVNUTES-UEPB"*/}
            {/*  target="_blank">*/}
            {/*  <img src={Youtube} alt="Youtube da sênior saúde móvel" width={24} height={24} />*/}
            {/*</SocialNetworksItem>*/}
            {/*<SocialNetworksItem*/}
            {/*  href="https://www.facebook.com/seniorsaudemovel"*/}
            {/*  target="_blank">*/}
            {/*  <img src={Facebook} alt="Facebook da sênior saúde móvel" width={24} height={24} />*/}
            {/*</SocialNetworksItem>*/}
            <SocialNetworksItem
              href="https://www.instagram.com/seniorsaudemovel"
              target="_blank">
              <img src={Instagram} alt="Instagram da sênior saúde móvel" width={24} height={24} />
            </SocialNetworksItem>
            <p>@seniorsaudemovel</p>
          </FlexRow>
        </SocialNetworks>

      </FlexRow>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} - Senior Saúde Móvel. Todos os direitos reservados.</p>
      </Copyright>

    </Footer>

  </React.Fragment>

}


