import { number } from 'prop-types'
import styled, { css } from 'styled-components'

import { media } from '../style'

export const Section = styled.section`
  ${({ margin }) => css`
    margin: 0 ${margin}%;

    ${media.medium(css`
      margin: 0 ${margin*2}%;
    `)}

    ${media.xlarge(css`
      margin: 0 ${margin*3}%;
    `)}
  `};
`

Section.propTypes = {
  margin: number.isRequired
}

Section.defaultProps = {
  margin: 0
}
