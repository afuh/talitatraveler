import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Category from '../components/category'

const CategoryTemplate = ({ pageContext, data: { posts } }) => (
  <Layout seo={{ title: pageContext.category }}>
    <Category category={pageContext.category} edges={posts.edges} />
  </Layout>
)

CategoryTemplate.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default CategoryTemplate

export const pageQuery = graphql`
  query CATEGORY_TEMPLATE_QUERY($category: [String!]) {
    posts: allContentfulPost(filter: { categories: { in: $category } }, sort: { fields: date, order: DESC }) {
      edges {
        node {
          ...PostCard
        }
      }
    }
  }
`
