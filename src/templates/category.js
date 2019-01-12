import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import Category from '../components/category'

const CategoryTemplate = ({ data: { posts: { edges, totalCount } } }) => (
  <Layout>
    <Category edges={edges} count={totalCount}/>
  </Layout>
)

CategoryTemplate.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.shape({
    contentfulProjects: PropTypes.object
  }).isRequired
}

export default CategoryTemplate

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
