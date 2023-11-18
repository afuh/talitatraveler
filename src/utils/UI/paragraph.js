import styled, { css } from 'styled-components'

export const Paragraph = styled.article`
  p {
    white-space: pre-line;
    font-size: ${({ theme }) => theme.spacing.rem(18)};

    ${({ theme }) =>
      theme.media.mobile(css`
        text-align: left;
      `)}
  }
`
