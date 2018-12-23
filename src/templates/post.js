import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"
import GatsbyImg from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../utils/seo'
import { Section } from '../utils/UI'

const Post = ({ data: { post }, location }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.content.md.excerpt}
      pathname={location.pathname}
      image={{
        url: post.headerImage.file.url,
        contentType: post.headerImage.file.contentType,
        size: post.headerImage.file.details.image
      }}
    />
    <Section>
      <h1>{post.title}</h1>
      <h2>{post.subTitle}</h2>
      <GatsbyImg
        fluid={post.headerImage.fluid}
        alt={post.headerImage.description}
        title={post.headerImage.description}
      />
      <div dangerouslySetInnerHTML={{ __html: post.content.md.html }} />
    </Section>
  </Layout>
)

Post.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Post

export const query = graphql`
  query POST_TEMPLATE_QUERY ($slug: String!) {
    post: contentfulPost(slug: { eq: $slug } ) {
      title
      subTitle
      headerImage {
        description
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        file {
          url
          contentType
          details {
            image {
              width
              height
            }
          }
        }
      }
      content {
        md: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
