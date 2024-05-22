import React from "react"
import {
    Address, AddressMap,
    Content, Copyright,
    FlexRow, Footer,
    Header,
    Innovation,
    MaxWidth, Partners, PartnersContent, PartnersHeader, PrimaryButton,
    ServicesBottom, ServicesBottomApple,
    ServicesTop, SocialNetworks, SocialNetworksHeader,
    SocialNetworksItem
} from './styles'
import GlobalStyle from "../styles/reset"
import Logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import Policy from '../assets/policy.svg'
import Instagram from '../assets/social_networks/instagram.svg'
import LogoNutes from '../assets/logo-nutes.jpg'
import LogoCentelha from '../assets/logo-centelha.jpg'
import LogoFapesq from '../assets/logo-fapesq.jpg'

export default function ApplePoliticaPrivacidade() {
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

        <div style={{
            marginTop: '10vh'
        }}>
            <Innovation id="section_innovation">
                <MaxWidth>
                    <FontAwesomeIcon icon={faCheckSquare}/>
                    <img src={Policy} alt="policy" />
                    <h1 id="innovation">Política de Privacidade</h1>
                    <p>Este documento de Política de Privacidade descreve como coletamos, usamos, armazenamos e
                        protegemos suas informações pessoais. Ao usar nosso App, você concorda com as práticas descritas nesta política.
                    </p>
                    <PrimaryButton onClick={() => window.location.href = "/"}>
                        Voltar para página inicial
                    </PrimaryButton>
                </MaxWidth>
            </Innovation>
        </div>

        <MaxWidth>
            <ServicesTop id="section_services">
                <div>
                    <h1 id="services">Coleta de Dados</h1>
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
                    <i className="fa fa-bar-chart"/>
                    <h1>Dados Coletados</h1>
                    <p>
                        Nosso App coleta os seguintes tipos de dados do aplicativo
                        "Health" do iPhone, após o seu consentimento:
                    </p>
                    <ul>
                        <li>Passos</li>
                        <li>Frequência Cardíaca</li>
                        <li>Sono</li>
                        <li>Minutos Ativos</li>
                    </ul>
                    <p>
                        A coleta desses dados somente ocorrerá após você realizar o login no App e conceder permissão
                        explícita para a coleta de dados.
                    </p>
                    <h2>Consentimento</h2>
                    <p>
                        A coleta de dados só será realizada após você fazer login no App e permitir explicitamente a
                        coleta de dados do aplicativo "Health". Você pode revogar essa permissão a qualquer momento nas
                        configurações do seu dispositivo.
                    </p>
                </div>

            </ServicesBottom>

        </MaxWidth>

        <MaxWidth>
            <ServicesTop id="section_services">
                <div>
                    <h1 id="services">Uso dos Dados</h1>
                    <p>Os dados coletados serão utilizados para:</p>
                    <ul>
                        <li>Fornecer uma visão detalhada e personalizada da sua saúde e atividade física no nosso dashboard</li>
                        <li>Melhorar a experiência do usuário no App</li>
                        <li>Desenvolver novas funcionalidades e serviços</li>
                    </ul>
                </div>
            </ServicesTop>
        </MaxWidth>

        <MaxWidth>
            <ServicesTop id="section_services">
                <div>
                    <h1 id="services">Armazenamento e Proteção dos Dados</h1>
                </div>
            </ServicesTop>
        </MaxWidth>

        <MaxWidth>
            <ServicesBottom>
                <div>
                    <i className="fa fa-database"/>
                    <h1>Armazenamento</h1>
                    <p>Os dados coletados serão armazenados de forma segura em nossos servidores. Implementamos medidas
                        de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração,
                        divulgação ou destruição.</p>
                </div>

                <div>
                    <i className="fa fa-lock"/>
                    <h1>Proteção</h1>
                    <p>Implementamos medidas de segurança razoáveis para proteger suas informações. No entanto, mesmo
                        que nos esforcemos para garantir segurança razoável às informações que processamos e armazenamos,
                        é importante reconhecer que nenhum sistema de segurança é infalível e pode evitar todas as
                        potenciais violações de segurança.</p>

                </div>
            </ServicesBottom>

        </MaxWidth>

        <MaxWidth>
            <ServicesTop id="section_services">
                <div>
                    <h1 id="services">Demais Politicas</h1>
                </div>
            </ServicesTop>
        </MaxWidth>

        <MaxWidth>
            <ServicesBottomApple>
                <div>
                    <i className="fa fa-share-alt"/>
                    <h1>Compartilhamento de Dados</h1>
                    <p>Não compartilhamos seus dados pessoais com terceiros, exceto quando:</p>
                    <ul>
                        <li>Você nos der consentimento explícito para compartilhar as informações</li>
                        <li>For necessário para cumprir com a lei ou responder a processos legais</li>
                        <li>For necessário para proteger nossos direitos, propriedade ou segurança</li>
                    </ul>
                </div>

                <div>
                    <i className="fa fa-book"/>
                    <h1>Seus Direitos</h1>
                    <p>Você tem o direito de:</p>
                    <ul>
                        <li>Acessar e corrigir suas informações pessoais armazenadas por nós</li>
                        <li>Solicitar a exclusão de suas informações pessoais</li>
                        <li>Revogar seu consentimento para a coleta e uso de seus dados</li>
                    </ul>
                    <p>Para exercer esses direitos, entre em contato conosco através do e-mail:
                        <a href="mailto:seniorsaudemovel@gmail.com">seniorsaudemovel@gmail.com</a>.</p>
                </div>

                <div>
                    <i className="fa fa-pencil-square-o"/>
                    <h1>Alterações a Esta Política de Privacidade</h1>
                    <p>Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos você sobre quaisquer
                        mudanças, publicando a nova política no App e, se as mudanças forem significativas, forneceremos
                        um aviso mais destacado (incluindo, para alguns serviços, notificação por e-mail das mudanças na
                        política de privacidade).</p>
                </div>

                <div>
                    <i className="fa fa-users"/>
                    <h1>Contato</h1>
                    <p>Se você tiver qualquer dúvida ou preocupação sobre esta Política de Privacidade, por favor, entre
                        em contato conosco pelo e-mail:
                        <a href="mailto:seniorsaudemovel@gmail.com">seniorsaudemovel@gmail.com</a>.</p>
                </div>

                <div>
                    <i className="fa fa-calendar"/>
                    <h1>Data de Vigência</h1>
                    <p>Esta Política de Privacidade é válida a partir de [22/05/2024].</p>
                </div>

                <div>
                    <i className="fa fa-globe"/>
                    <h1>Transferência Internacional de Dados</h1>
                    <p>Seus dados pessoais podem ser transferidos para, e mantidos em, computadores localizados fora do
                        seu estado, província, país ou outra jurisdição governamental onde as leis de proteção de dados
                        podem ser diferentes das de sua jurisdição. Se você estiver fora dos Estados Unidos e optar por
                        nos fornecer informações, observe que transferimos os dados, incluindo dados pessoais, para os
                        Estados Unidos e os processamos lá. Seu consentimento para esta Política de Privacidade, seguido
                        pelo envio de tais informações, representa seu acordo para essa transferência.</p>
                </div>

                <div>
                    <i className="fa fa-unlock-alt"/>
                    <h1>Retenção de Dados</h1>
                    <p>Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para
                        os quais as coletamos, inclusive para fins de cumprimento de quaisquer obrigações legais,
                        contábeis ou de relatório. Para determinar o período de retenção adequado para dados pessoais,
                        consideramos a quantidade, a natureza e a sensibilidade dos dados, o risco potencial de dano pelo
                        uso não autorizado ou divulgação de seus dados, os propósitos para os quais processamos seus dados
                        e se podemos alcançar esses propósitos através de outros meios, bem como os requisitos legais aplicáveis.</p>
                </div>

                <div>
                    <i className="fa fa-child"/>
                    <h1>Menores de Idade</h1>
                    <p>Manteremos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos para
                        os quais as coletamos, inclusive para fins de cumprimento de quaisquer obrigações legais,
                        contábeis ou de relatório. Para determinar o período de retenção adequado para dados pessoais,
                        consideramos a quantidade, a natureza e a sensibilidade dos dados, o risco potencial de dano pelo
                        uso não autorizado ou divulgação de seus dados, os propósitos para os quais processamos seus dados
                        e se podemos alcançar esses propósitos através de outros meios, bem como os requisitos legais aplicáveis.</p>
                </div>

            </ServicesBottomApple>

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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.39184468452277!2d-35.91094809269672!3d-7.210064025236793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ac1f89b4472451%3A0x7d38bbc661779386!2sNUTES%20UEPB%20(Nucleo%20de%20Tecnologia%20em%20Sa%C3%BAde)!5e0!3m2!1spt-BR!2sbr!4v1716408479394!5m2!1spt-BR!2sbr"
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
