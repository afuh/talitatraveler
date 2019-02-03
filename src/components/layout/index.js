import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'
import styled, { ThemeProvider, css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'

const height = {
  header: 80,
  footer: 300
}

const Main = styled.main`
  max-width: 84%;
  margin: 0 auto;
  min-height: calc(100vh - ${height.header}px);

  ${media.phone(css`
    max-width: none;
    margin: 0;
  `)}
`

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={({ site: { meta }, contact }) => (
      <>
        <GlobalStyle />
        <SEO />
        <ThemeProvider theme={theme}>
          <>
            <Header
              nav={meta.nav}
              height={height.header}
            />
            <Main>
              {children}
            </Main>
            <Footer
              social={contact.social}
              height={height.footer}
            />
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

export default Layout

const query = graphql`
  query LAYOUT_QUERY {
    contact: contentfulContactInfo {
      social {
        name
        url
      }
    }
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
