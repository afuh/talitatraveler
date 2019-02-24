import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'

const headerHeight = 120

const Main = styled.main`
  max-width: 84%;
  margin: 0 auto;
  min-height: calc(100vh - ${headerHeight}px);

  ${media.phone(css`
    max-width: none;
    margin: 0;
  `)}
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

            <Header
              nav={meta.nav}
              height={headerHeight}
            />
            <Main>
              {children}
            </Main>
            <Footer
              external={meta.external}
              nav={meta.footerNav}
            />
          </>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const query = graphql`
  query LAYOUT_QUERY {
    site {
      meta: siteMetadata {
        nav {
          name
          path
        }
        footerNav {
          name
          path
        }
        external {
          name
          url
        }
      }
    }
  }
`
