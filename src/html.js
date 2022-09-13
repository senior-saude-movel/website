import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
        <head>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
            <meta charSet="utf-8"/>
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <meta
                name="description"
                content="Sênior Saúde Móvel, tecnologia para mais cuidados humanizados na melhor idade"/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta property="twitter:domain" content="seniorsaudemovel.com.br"/>
            <meta property="twitter:url" content="https://seniorsaudemovel.com.br/"/>
            <meta name="twitter:title" content="Sênior Saúde Móvel"/>
            <meta name="twitter:description"
                  content="A Sênior Saúde Móvel nasceu em Campina Grande, fruto dos projetos de doutorado e mestrado de duas fisioterapeutas: Eujessika Rodrigues e Marcela Pimentel. Entusiastas do universo do envelhecimento humano, as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais inovador, personalizado, humanizado e que estimule a autonomia e a independência do idoso."/>
            <meta name="twitter:image" content="/icons/og_image.png"/>
            <meta property="og:url" content="https://seniorsaudemovel.com.br/"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="Sênior Saúde Móvel"/>
            <meta property="og:description"
                  content="A Sênior Saúde Móvel nasceu em Campina Grande, fruto dos projetos de doutorado e mestrado de duas fisioterapeutas: Eujessika Rodrigues e Marcela Pimentel. Entusiastas do universo do envelhecimento humano, as duas dedicam-se nos últimos anos à prestação de um atendimento fisioterapêutico cada vez mais inovador, personalizado, humanizado e que estimule a autonomia e a independência do idoso."/>
            <meta property="og:image" content="/icons/og_image.png"/>
            <title>Sênior Saúde Móvel - Tecnologia para mais cuidados
                humanizados na melhor idade</title>
            {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
        <noscript>Use JavaScript dude!!</noscript>
        {props.preBodyComponents}
        <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: props.body}}
        />
        {props.postBodyComponents}
        </body>
        </html>
    )
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array
}
