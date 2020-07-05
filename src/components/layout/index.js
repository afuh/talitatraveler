import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import SEO from '../../utils/seo'
import { GlobalStyles } from '../../utils/style'
import { useSiteMeta } from '../../utils/hooks'
import Footer from './footer'
import Header from './header'

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    flex: 1;
  }
`

const Layout = ({ children, seo, withImage }) => {
  const { nav, footerNav, external } = useSiteMeta()

  return (
    <>
      <GlobalStyles />
      <SEO {...seo} />
      <PageWrapper>
        <Header nav={nav} withImage={withImage} />
        <main>{children}</main>
        <Footer external={external} nav={footerNav} />
      </PageWrapper>
    </>
  )
}

Layout.propTypes = {
  seo: PropTypes.object,
  withImage: PropTypes.bool,
}

export default Layout
