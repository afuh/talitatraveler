import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from "gatsby"

import Layout from '../components/layout'

const Category = ({ data: { posts } }) => (
  <Layout>
    {posts.edges.map(({ node }) => (
      <div key={node.slug}>
        <Link to={node.slug}>{node.title}</Link>
      </div>
    ))}
  </Layout>
)

Category.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default Category

export const pageQuery = graphql`
  query CATEGORY_TEMPLATE_QUER($category: [String!]) {
    posts: allContentfulPost(
      filter: { tags: { in: $category } }
    ) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`
