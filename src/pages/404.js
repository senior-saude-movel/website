import React from "react"
import { Banner, Content, Header, NotFoundContent, PrimaryButton } from "./styles"
import GlobalStyle from "../styles/reset"
import Logo from "../assets/logo.svg"
import LogoWhite from "../assets/logo-white.svg"

export default function NotFound() {
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

    <Banner/>

    <NotFoundContent>

      <img src={LogoWhite} alt="Sênior Saúde Móvel" />

      <h1>Error 404</h1>

      <h2>Página Não Encontrada!</h2>

      <p>A página solicitada encontra-se indisponível ou foi definitivamente removida.</p>

      <PrimaryButton onClick={() => window.location.href = "/"}>
        Página Inicial
      </PrimaryButton>

    </NotFoundContent>
  </React.Fragment>
}
