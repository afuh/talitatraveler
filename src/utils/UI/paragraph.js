import styled, { css } from 'styled-components'

export const Paragraph = styled.article`
  p {
    white-space: pre-line;
    text-align: justify;

    ${({ theme }) =>
      theme.media.mobile(css`
        text-align: left;
      `)}
  }
`
