import React from 'react'
import styled from 'styled-components'

import { useSiteContent } from '../../../../utils/hooks'

const HeaderWrapper = styled.div`
  margin: 12px 0;

  h2 {
    font-weight: 900;
    margin: 0;
    margin-bottom: 4px;
  }

  span {
    font-weight: 500;
  }
`

const Header = () => {
  const { subscriptionTitle, subscriptionSubtitle } = useSiteContent()

  return (
    <HeaderWrapper>
      <h2>{subscriptionTitle}</h2>
      <span>{subscriptionSubtitle}</span>
    </HeaderWrapper>
  )
}

export default Header
