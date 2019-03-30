require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const siteConfig = require('./config/siteConfig')

const feed = `{
  allContentfulPost(sort: { fields: createdAt, order: DESC  }) {
    edges {
      node {
        createdAt
        date
				slug
        title
        categories
        image: headerImage {
          file {
            url
            contentType
            details {
              size
            }
          }
        }
        content {
          md: childMarkdownRemark {
            html
            excerpt
          }
        }
      }
    }
  }
}`

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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Noto Serif KR",
            variants: ["500", "700", "900"]
          }
        ]
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
        icon: siteConfig.icon
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
          'gatsby-remark-figure-caption',
          'gatsby-remark-numbered-footnotes',
          'gatsby-remark-responsive-iframe'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA,
        anonymize: true,
        respectDNT: true
      }
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: process.env.MAIL
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        feeds: [
          {
            query: feed,
            title: siteConfig.title,
            description: siteConfig.description,
            output: '/rss.xml',
            setup: () => ({
              title: siteConfig.title,
              description: siteConfig.description,
              feed_url: siteConfig.siteUrl + `/rss.xml`,
              site_url: siteConfig.siteUrl,
              image_url: siteConfig.siteUrl + siteConfig.image
            }),
            serialize: ({ query: { allContentfulPost } }) =>
              allContentfulPost.edges.map(({ node }) => ({
                title: node.title,
                description: node.content.md.excerpt,
                date: node.date ? node.date : node.createdAt,
                url: siteConfig.siteUrl + "/" + node.slug,
                guid: siteConfig.siteUrl + "/" + node.slug,
                categories: node.categories,
                custom_elements: [ {
                  "content:encoded": node.content.md.html
                } ],
                enclosure: {
                  url: node.image.file.url,
                  type: node.image.file.contentType,
                  size: node.image.file.details.size
                }
              }))
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
}
