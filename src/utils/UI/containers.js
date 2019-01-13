import styled, { css } from 'styled-components'

import { media } from '../style'

export const Section = styled.section`
  margin: 0 ${({ theme }) => theme.position.baseMargin}%;

  ${media.phone(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin - 2}%;
  `)}

  ${media.medium(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*2}%;
  `)}

  ${media.xlarge(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*3}%;
  `)}

  ${media.xxlarge(css`
    margin: 0 ${({ theme }) => theme.position.baseMargin*4}%;
  `)}
`
