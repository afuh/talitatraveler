import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import styled, { ThemeProvider } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle } from '../../utils/style'

const Main = styled.main`
  max-width: 900px;
  margin: 50px auto;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta } }) => (
      <>
        <GlobalStyle />
        <SEO />
        <ThemeProvider theme={theme}>
          <>
            <Header nav={meta.nav} />
            <Main>
              {children}
            </Main>
            <Footer social={[]}/>
          </>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired
}

export default ({ children }) => (
  <Location>
    {({ location }) => (
      <Layout location={location}>
        {children}
      </Layout>
    )}
  </Location>
)

const query = graphql`
  query LAYOUT_QUERY {
    site {
      meta: siteMetadata {
        nav {
          name
          path
        }
      }
    }
  }
`
