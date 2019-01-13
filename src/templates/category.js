import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import SEO from '../utils/seo'
import Layout from '../components/layout'
import Category from '../components/category'

const CategoryTemplate = ({ pageContext, data: { posts: { edges, totalCount } } }) => (
  <Layout>
    <SEO
      title={pageContext.category}
    />
    <Category edges={edges} count={totalCount}/>
  </Layout>
)

CategoryTemplate.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string
  }).isRequired,
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
          ...PostCard_Big
        }
      }
    }
  }
`
