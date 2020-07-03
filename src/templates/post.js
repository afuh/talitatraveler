import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Post from '../components/post'
import { edgesToNode } from '../utils/helpers'

const PostTemplate = ({ data: { post, suggested } }) => (
  <Layout
    withImage
    seo={
      process.env.NODE_ENV === 'production'
        ? {
            title: post.title,
            description: post.content.md.excerpt,
            pathname: '/' + post.slug,
            image: {
              url: post.headerImage.file.url,
              contentType: post.headerImage.file.contentType,
              size: post.headerImage.file.details.image,
            },
          }
        : {}
    }
  >
    <Post relatedPosts={edgesToNode(suggested.edges)} post={post} />
  </Layout>
)

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PostTemplate

export const query = graphql`
  query POST_TEMPLATE_QUERY($slug: String!, $categories: [String!]) {
    suggested: allContentfulPost(
      filter: { categories: { in: $categories }, slug: { ne: $slug } }
      sort: { fields: createdAt, order: DESC }
      limit: 3
    ) {
      edges {
        node {
          ...PostCard
        }
      }
    }
    post: contentfulPost(slug: { eq: $slug }) {
      ...PostBasicInfo
      ...Dates
      categories
      whiteSpace
      headerImage {
        description
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
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
      suggestions {
        ...PostCard
      }
    }
  }
`
