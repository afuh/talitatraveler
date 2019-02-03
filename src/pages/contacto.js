import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import Contact from '../components/contact'

const AboutPage = ({ data: { site: { meta } } }) => (
  <Layout>
    <SEO
      title='Contacto'
    />
    <Contact contact={meta.external} />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const query = graphql`
  query CONTACT_PAGE_QUERY {
    site {
      meta: siteMetadata {
        external {
          name
          url
        }
      }
    }
  }
`
