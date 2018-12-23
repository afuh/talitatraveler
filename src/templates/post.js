import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../utils/seo'
import { Section } from '../utils/UI'

const Page = ({ data: { page }, location }) => (
  <Layout>
    <SEO
      title={page.name}
      description={page.content.md.excerpt}
      pathname={location.pathname}
    />
    <Section>
      <div dangerouslySetInnerHTML={{ __html: page.content.md.html }} />
    </Section>
  </Layout>
)

Page.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default Page

export const query = graphql`
  query POST_TEMPLATE_QUERY ($slug: String!) {
    page: contentfulPost(slug: { eq: $slug } ) {
      content {
        md: childMarkdownRemark {
          excerpt
          html
        }
      }
    }
  }
`
