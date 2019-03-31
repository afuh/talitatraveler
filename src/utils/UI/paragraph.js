import styled, { css } from 'styled-components'

import { media } from '../style'

export const Paragraph = styled.div`
  p {
    white-space: pre-line;
    text-align: justify;

    ${media.mobile(css`
      text-align: left;
    `)}
  }
`
