import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

const SEO = ({ title, description, image, pathname }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        meta: {
          defaultTitle,
          defaultDescription,
          defaultImage,
          siteUrl,
          titleTemplate,
          favicon,
          userTwitter
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        url: `${siteUrl}${pathname || '/'}`,
        favicon: `${siteUrl}${favicon}`,
        image: {
          url: image ? image.url : `${siteUrl}${defaultImage}`,
          contentType: image ? image.contentType : "image/jpeg",
          size: image ? image.size : { width: "1440", height: "720" }
        }
      }

      return (
        <Helmet
          htmlAttributes={{ lang: "es" }}
          titleTemplate={titleTemplate}
          title={seo.title}
        >
          <link rel="shortcut icon" href={seo.favicon}/>
          <link rel="icon" href={seo.favicon}/>

          <meta name="description" content={seo.description} />
          <meta name="image" content={seo.image.url} />

          <meta property="og:locale" content='en'/>
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={seo.title} />
          <meta property="og:title" content={seo.title} />
          <meta property="og:url" content={seo.url} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.image.url} />
          <meta property="og:image:type" content={seo.image.contentType} />
          <meta property="og:image:width" content={seo.image.size.width} />
          <meta property="og:image:height" content={seo.image.size.height} />

          {userTwitter && <meta name="twitter:creator" content={userTwitter} />}
          {userTwitter && <meta name="twitter:site" content={userTwitter} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:url" content={seo.url} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.image.url} />
        </Helmet>
      ) }}
  />
)

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  pathname: PropTypes.string
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null
}

export default SEO

const query = graphql`
  query SEO_QUERY {
    site {
      meta: siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl
        defaultImage: image
        titleTemplate
        favicon
        userTwitter
      }
    }
  }
`
