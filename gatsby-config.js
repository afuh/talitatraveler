require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const stopWords = require('stopwords-es')

const siteConfig = require('./config/siteConfig')

const algolia = `{
  allContentfulPost {
    edges {
      node {
        objectID: id
        title
        slug
        categories
        content {
          md: childMarkdownRemark {
            body: rawMarkdownBody
          }
        }
      }
    }
  }
}`

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
          'gatsby-remark-smartypants',
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
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        chunkSize: 10000,
        queries: [ {
          query: algolia,
          transformer: ({ data }) => data.allContentfulPost.edges.map(({ node }) => {
            const content = node.content.md.body
              .replace(/\s\s+/g, " ")
              .split(" ")
              .filter(word => stopWords.indexOf(word) < 0)
              .join(" ")

            return {
              ...node,
              content
            }
          })
        } ]
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cache',
    'gatsby-plugin-netlify'
  ]
}
