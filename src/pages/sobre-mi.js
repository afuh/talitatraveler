import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = ({ data: { author } }) => (
  <Layout>
    <SEO
      title='Sobre mí'
    />
    <About author={author} />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const query = graphql`
  query ABOUT_PAGE_QUERY {
    author: contentfulContent {
      name: authorName
      bio: authorBio {
        md: childMarkdownRemark {
          html
        }
      }
    }
  }
`
