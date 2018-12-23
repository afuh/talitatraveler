require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteConfig = require('./config/siteConfig')

module.exports = {
  siteMetadata: {
    ...siteConfig
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteConfig.title,
        short_name: siteConfig.title,
        description: siteConfig.description,
        start_url: "/",
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: "standalone",
        icon: `src/assets/icon-512x512.png`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: siteConfig.themeColor,
        showSpinner: false
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 900,
              linkImagesToOriginal: true
            }
          },
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
}
