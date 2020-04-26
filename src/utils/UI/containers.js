import { number } from 'prop-types'
import styled, { css } from 'styled-components'

export const Section = styled.section`
  ${({ theme, margin }) => css`
    margin: 0 ${margin}%;

    ${theme.media.medium(css`
      margin: 0 ${margin * 2}%;
    `)}

    ${theme.media.xlarge(css`
      margin: 0 ${margin * 3}%;
    `)}
  `};
`

Section.propTypes = {
  margin: number.isRequired,
}

Section.defaultProps = {
  margin: 0,
}
