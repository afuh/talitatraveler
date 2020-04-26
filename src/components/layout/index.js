import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import Header from './header'
import Footer from './footer'
import SEO from '../../utils/seo'
import { media, GlobalStyles } from '../../utils/style'
import { useSiteMeta } from '../../utils/hooks'

const Main = styled.main`
  margin: 0 auto;

  ${media.phone(css`
    max-width: none;
    margin: 0;
  `)}
`

const Layout = ({ children, seo, withImage }) => {
  const { nav, footerNav, external } = useSiteMeta()

  return (
    <>
      <GlobalStyles />
      <SEO {...seo} />
      <Header nav={nav} withImage={withImage} />
      <Main>{children}</Main>
      <Footer external={external} nav={footerNav} />
    </>
  )
}

Layout.propTypes = {
  seo: PropTypes.object,
  withImage: PropTypes.bool,
}

export default Layout
