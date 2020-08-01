import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout withImage>
    <Home data={data} />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY($skip: Int!, $limit: Int!) {
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
