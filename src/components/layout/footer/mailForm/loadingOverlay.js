import React from 'react'
import styled from 'styled-components'

import { Spinner } from '../../../../utils/UI/icons'

const SpinWrapper = styled.div`
  position: absolute;
  top: 0;
  background: transparent;

  min-width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadingOverlay = () => (
  <SpinWrapper>
    <Spinner color={'#FF5722'} />
  </SpinWrapper>
)

export default LoadingOverlay
