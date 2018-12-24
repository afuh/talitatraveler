import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import { Section, PostCard } from '../utils/UI'
import Layout from '../components/layout'

const Category = ({ data: { posts: { edges } } }) => (
  <Layout>
    <Section>
      {edges.map(({ node }) => (
        <PostCard
          key={node.id}
          node={node}
        />
      ))}
    </Section>
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
      filter: { categories: { in: $category } }
    ) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`
