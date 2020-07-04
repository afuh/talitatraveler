import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Posts from '../components/posts'

const PaginatedPosts = ({ data }) => (
  <Layout>
    <Posts data={data} />
  </Layout>
)

PaginatedPosts.propTypes = {
  data: PropTypes.object.isRequired,
}

export default PaginatedPosts

export const query = graphql`
  query PAGINATED_POSTS($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      totalCount
      pageInfo {
        currentPage
        pageCount
        perPage
      }
      edges {
        node {
          ...PostCard
          ...Dates
        }
      }
    }
  }
`
