/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const siteMetadata = require('./config/metadata')

module.exports = {
    siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sitemap`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Senior Saude Movel`,
                short_name: `Senior Saude Movel`,
                description: 'A aplicação web da Sênior Saúde Movel é utilizada por profissionais de saúde e cuidadores para monitorizar as atividades físicas realizadas, registos de sono, diagnósticos, medições e muito mais.',
                start_url: `/`,
                background_color: `#FAFAFA`,
                theme_color: `#50BB98`,
                display: `minimal-ui`,
                icon: 'static/icons/ssm_256x256.png',
                icons: [
                    {
                        src: '/icons/ssm_16x16.png',
                        sizes: '16x16',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_24x24.png',
                        sizes: '24x24',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_32x32.png',
                        sizes: '32x32',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_64x64.png',
                        sizes: '64x64',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_128x128.png',
                        sizes: '128x128',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_256x256.png',
                        sizes: '256x256',
                        type: 'image/png',
                        purpose: 'any maskable'
                    },
                    {
                        src: '/icons/ssm_512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable'
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-nprogress`,
            options: {
                color: `#50BB98`
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-98273729'
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: process.env.NODE_ENV !== 'production'
            }
        },
        {
            resolve: `gatsby-plugin-page-creator`,
            options: {
                path: `${__dirname}/src/pages`,
                ignore: [`**/styles.js`]
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Roboto`,
                    `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
                ],
                display: 'swap'
            }
        },
        {
            resolve: 'gatsby-plugin-robots-txt',
            options: {
                policy: [
                    {userAgent: 'Twitterbot', disallow: ''},
                    {userAgent: '*', disallow: '/'}
                ]
            }
        }
    ]
}
