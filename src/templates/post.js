import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Post from '../components/post'
import SEO from '../utils/seo'

const PostTemplate = ({ data: { post } }) => (
  <Layout>
    <SEO
      title={post.title}
      description={post.content.md.excerpt}
      pathname={"/" + post.slug}
      image={{
        url: post.headerImage.file.url,
        contentType: post.headerImage.file.contentType,
        size: post.headerImage.file.details.image
      }}
    />
    <Post
      post={post}
    />
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
}

export default PostTemplate

export const query = graphql`
  query POST_TEMPLATE_QUERY ($slug: String!) {
    post: contentfulPost(slug: { eq: $slug } ) {
      id
      title
      subTitle
      slug
      categories
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
      author {
        name
        slug
      }
      createdAt(formatString: "MMMM, YYYY", locale: "es")
      date(formatString: "MMMM, YYYY", locale: "es")
      suggestions {
        ...PostCard
      }
    }
  }
`
