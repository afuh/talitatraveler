import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import Contact from '../components/contact'

const AboutPage = ({ data: { contact: { text } } }) => (
  <Layout>
    <SEO title='Contacto' />
    <Contact contact={{ text }} />
  </Layout>
)

export default AboutPage

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export const query = graphql`
  query CONTACT_PAGE_QUERY {
    contact: contentfulContent {
      text: contactText {
        md: childMarkdownRemark {
          html
        }
      }
    }
  }
`
