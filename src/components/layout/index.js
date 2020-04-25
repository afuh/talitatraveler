import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { media } from '../../utils/style'
import { useSiteMeta } from '../../utils/hooks'

const Main = styled.main`
  margin: 0 auto;
  min-height: calc(100vh - ${({ theme }) => theme.headerHeight}px);

  ${media.phone(css`
    max-width: none;
    margin: 0;
  `)}
`

const Layout = ({ children, seo }) => {
  const { nav, footerNav, external } = useSiteMeta()

  return (
    <>
      <SEO {...seo} />
      <Header nav={nav} />
      <Main>{children}</Main>
      <Footer external={external} nav={footerNav} />
    </>
  )
}

Layout.propTypes = {
  seo: PropTypes.object,
}

export default Layout
