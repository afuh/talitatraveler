import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import Contact from '../components/contact'

const AboutPage = ({ data: { contact } }) => (
  <Layout>
    <SEO
      title='Contacto'
    />
    <Contact contact={contact} />
  </Layout>
)

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
}

export default AboutPage

export const query = graphql`
  query CONTACT_PAGE_QUERY {
    contact: contentfulContactInfo {
      social {
        name
        url
      }
    }
  }
`
