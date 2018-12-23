import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = ({ data }) => (
  <Layout>
    <Home data={data}/>
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage

export const query = graphql`
  query HOME_PAGE_QUERY {
    posts: allContentfulPost(sort: {fields: date, order: DESC  }) {
      edges {
        node {
          id
          title
          slug
          createdAt(fromNow: true, locale: "es")
          date(fromNow: true, locale: "es")
          content {
            md: childMarkdownRemark {
              excerpt
              timeToRead
            }
          }
          headerImage {
            description
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
