import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider, css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'

const headerHeight = 80

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
    render={({ site: { meta }, contact }) => (
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
              siteUrl={meta.siteUrl}
              nav={meta.footerNav}
              social={contact.social}
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
    contact: contentfulContactInfo {
      social {
        name
        url
      }
    }
    site {
      meta: siteMetadata {
        siteUrl
        nav {
          name
          path
        }
        footerNav {
          name
          path
        }
      }
    }
  }
`
