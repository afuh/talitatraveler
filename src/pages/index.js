import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout>
    <SEO />
    <Home data={data} />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY {
    posts: allContentfulPost(sort: { fields: createdAt, order: DESC  }) {
      totalCount
      edges {
        node {
          ...PostCard
          date
          createdAt
        }
      }
    }
  }
`
