import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import {
    About,
    Address,
    AddressMap,
    BadgesApp,
    BadgesAppItem,
    Banner,
    BannerContent,
    BannerPrimaryImage,
    Content,
    Copyright,
    FlexColumn,
    FlexRow, FlexRowSpaceBetween,
    Footer,
    Header,
    Innovation,
    MaxWidth,
    Partners,
    PartnersContent,
    PartnersHeader, PrimaryButton,
    Professionals, ProfessionalsItem, ProfessionalsName,
    ProfessionalsTitle,
    RotatePerspectiveOne,
    RotatePerspectiveTwo,
    ServicesBottom,
    ServicesTop,
    SocialNetworks,
    SocialNetworksHeader,
    SocialNetworksItem,
    Technologies, TextShadow,
    TextTechnology,
} from './styles'
import Swiper from '../components/Swiper.js'
import GlobalStyle from '../styles/reset'
import Logo from '../assets/logo.svg'
import LogoWhite from '../assets/logo-white.svg'
import Healthy from '../assets/healthy.jpeg'
import Eujessika from '../assets/professionals/eujessika.jpeg'
import LogoNutes from '../assets/logo-nutes.jpg'
import LogoFapesq from '../assets/logo-fapesq.jpg'
import LogoCentelha from '../assets/logo-centelha.jpg'
import Idea from '../assets/idea.svg'
import Instagram from '../assets/social_networks/instagram.svg'
import AppLogin from '../assets/app/login_perspective.png'
import AppDashboard from '../assets/app/dashboard_pespective.png'
import PlayStore from '../assets/play.store.png'
import AppStore from '../assets/app.store.svg'

export default function Index() {

    return <React.Fragment>

        <GlobalStyle/>

        <Header>
            <Content>
                <img src={Logo} alt="Sênior Saúde Móvel"/>
                <div>
                    <h1>Sênior Saúde Móvel</h1>
                    <h2>Tecnologia para mais cuidados humanizados na melhor idade</h2>
                </div>
            </Content>
        </Header>

        <Banner>

            <BannerPrimaryImage>
                <img src={LogoWhite} alt="Sênior Saúde Móvel"/>
            </BannerPrimaryImage>

            <BannerContent>
                <FlexRow>
                    <RotatePerspectiveOne src={AppLogin} alt="Aplicativo móvel da Sênior Saúde Móvel"/>
                    <FlexColumn>
                        <PrimaryButton
                            onClick={() => window.open('https://senior.nutes.uepb.edu.br', '_blank')}
                            title={'Clique para acessar a plataforma da Sênior Saúde Móvel'}>
                            ENTRAR
                        </PrimaryButton>
                        <FlexRow>
                        </FlexRow>
                        <FlexRow>
                            <TextShadow><i className="fa fa-envelope"/></TextShadow>
                            <TextShadow>
                                <h1>seniorsaudemovel@gmail.com</h1>
                            </TextShadow>
                        </FlexRow>
                    </FlexColumn>
                    <RotatePerspectiveTwo src={AppDashboard} alt="Aplicativo móvel da Sênior Saúde Móvel"/>
                </FlexRow>
            </BannerContent>

            <BadgesApp>
                <h1>Em breve disponível para as plataformas Android e IOS.</h1>
                <FlexRow>
                    <div>
                        <BadgesAppItem
                            href="https://play.google.com/store"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Google Play">
                            <img src={PlayStore} alt="Aplicativo sênior saúde móvel para plataforma Android"/>
                        </BadgesAppItem>
                    </div>
                    <div>
                        <BadgesAppItem
                            href="https://www.apple.com/pt/app-store/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="App Store">
                            <img src={AppStore} alt="Aplicativo sênior saúde móvel para plataforma IOS"/>
                        </BadgesAppItem>
                    </div>
                </FlexRow>
            </BadgesApp>

        </Banner>

        <MaxWidth>
            <About id="section_about">

                <img src={Healthy} alt="healthy"/>

                <div>
                    <h1>Sobre</h1>
                    <p>A Sênior Saúde Móvel nasceu em Campina Grande, fruto do projeto de doutorado e mestrado de Eujessika Rodrigues. Entusiasta do universo do
                        envelhecimento humano,
                        as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais
                        inovador,
                        personalizado, humanizado e que estimule a autonomia e a independência do idoso. </p>
                </div>

            </About>
        </MaxWidth>

        <Innovation id="section_innovation">
            <MaxWidth>
                <FontAwesomeIcon icon={faCheckSquare}/>
                <img src={Idea} alt="ideia"/>
                <h1 id="innovation">Inovação</h1>
                <p>Após profunda dedicação em estudos nessa área, a Sênior Saúde Móvel implementou uma estratégia
                    tecnológica
                    aos atendimentos fisioterapêuticos. Desenvolvemos um sistema de monitoramento remoto de idosos, que
                    capta
                    informações do paciente 24h por dia fazendo uso avançado de todo o potencial de relógios e pulseiras
                    inteligentes. Esse serviço auxilia na avaliação continuada, oferecendo dados cruciais para predição
                    de
                    condições adversas à saúde, bem como ajuda na tomada de decisão fisioterapêutica. Idosos em
                    diferentes
                    condições funcionais podem se beneficiar do monitoramento remoto.
                </p>
            </MaxWidth>
        </Innovation>

        <MaxWidth>
            <ServicesTop id="section_services">
                <div>
                    <h1 id="services">Serviços</h1>
                    <p>
                        A Sênior Saúde Móvel realiza atendimentos em fisioterapia em gerontologia e fisioterapia
                        neurofuncional
                        para idosos fundamentado em evidências.Os tratamentos realizados baseiam-se nos seguintes
                        pilares:
                    </p>
                </div>
            </ServicesTop>
        </MaxWidth>

        <MaxWidth>

            <ServicesBottom>
                <div>
                    <i className="fa fa-edit"/>
                    <h1>Tratamento Personalizado</h1>
                    <p>
                        O idoso é motivado à tornar-se corresponsável da sua evolução terapêutica. O paciente é um
                        componente ativo
                        do seu tratamento.
                    </p>
                </div>

                <div>
                    <i className="fa fa-edit"/>
                    <h1>Autogerenciamento</h1>
                    <p>
                        A estratégia terapêutica é definida para o nível funcional de cada idoso. Considerando as
                        particularidades
                        de cada indivíduo.
                    </p>
                </div>

                <div>
                    <i className="fa fa-edit"/>
                    <h1>Funcionalidade</h1>
                    <p>
                        Voltamos nosso olhar para muito além do diagnóstico clínico, focamos a nossa atenção para a
                        queixa
                        funcional e valorizamos as potencialidades que cada idoso apresenta.
                    </p>
                </div>
            </ServicesBottom>

            <ProfessionalsTitle id="professioals">
                Fundadora
            </ProfessionalsTitle>

            <Professionals>

                <ProfessionalsItem>
                    <FlexColumn>

                        <FlexRow>
                            <section>
                                <img src={Eujessika} alt="Fisioterapeuta Eujessika Rodrigues"/>
                            </section>
                            <ul>
                                <li>Dra. Eujessika Rodrigues</li>
                                <li>Fundadora da Startup Sênior Saúde Móvel</li>
                                <li>Pesquisadora no Núcleo de Tecnologias Estratégicas em Saúde (NUTES/UEPB)</li>
                            </ul>
                        </FlexRow>

                        <FlexRowSpaceBetween>

                            <ProfessionalsName>Eujessika Rodrigues</ProfessionalsName>

                            <FlexRow>
                                <SocialNetworksItem
                                    href="https://www.instagram.com/eujessika"
                                    target="_blank">
                                    <img src={Instagram} alt="Instagram de Eujessika Rodrigues" width={24} height={24}/>
                                    <p>@eujessika</p>
                                </SocialNetworksItem>
                            </FlexRow>

                        </FlexRowSpaceBetween>

                    </FlexColumn>
                </ProfessionalsItem>

            </Professionals>

            <TextTechnology>
                <h1 id="tecnologies">Tecnologias</h1>
                <p>
                    A Sênior Saúde Móvel dispõe de tecnologias para acompanhamento remoto que vão além das sessões de
                    fisioterapia. O paciente é motivado a buscar hábitos de vida mais saudáveis com nossas aplicações e
                    nossa
                    equipe presta assistência em tempo real.
                </p>
            </TextTechnology>

        </MaxWidth>

        <MaxWidth>
            <Technologies>
                <Swiper/>
            </Technologies>
        </MaxWidth>

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
                    <img src={LogoNutes} alt="Logo do Núcleo de Tecnologias Estratégicas em Saúde - NUTES"/>
                </a>
                <a
                    href="https://programacentelha.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Programa Centelha">
                    <img src={LogoCentelha} alt="Logo do Programa Centelha"/>
                </a>
                <a
                    href="http://fapesq.rpp.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Fundação de Apoio à Pesquisa do Estado da Paraíba - FAPESQPB">
                    <img src={LogoFapesq} alt="Logo da Fundação de Apoio à Pesquisa do Estado da Paraíba - FAPESQPB"/>
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
                            loading="lazy"/>
                    </AddressMap>

                    <p>Av. Juvêncio Arruda, S/N - Universitário, Campina Grande - PB.</p>
                    <p>58.429-600.</p>

                </Address>

                <SocialNetworks>

                    <SocialNetworksHeader>
                        Siga-nos no instagram.
                    </SocialNetworksHeader>

                    <FlexRow>
                        <SocialNetworksItem
                            href="https://www.instagram.com/seniorsaudemovel"
                            target="_blank">
                            <img src={Instagram} alt="Instagram da sênior saúde móvel" width={24} height={24}/>
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