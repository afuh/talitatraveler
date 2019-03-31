import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider, css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { theme, GlobalStyle, media } from '../../utils/style'
import { useSiteMeta } from '../../utils/hooks'

const { headerHeight } = theme

const Main = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - ${headerHeight}px);

  ${media.phone(css`
    max-width: none;
    margin: 0;
  `)}
`

const Layout = ({ children }) => {
  const { nav, footerNav, external } = useSiteMeta()

  return (
    <>
      <GlobalStyle />
      <SEO />
      <ThemeProvider theme={theme}>
        <>
          <Header
            nav={nav}
            height={headerHeight}
          />
          <Main>
            {children}
          </Main>
          <Footer
            external={external}
            nav={footerNav}
          />
        </>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
