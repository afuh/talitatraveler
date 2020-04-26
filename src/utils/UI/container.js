import styled, { css } from 'styled-components'

export const Container = styled.section`
  ${({ theme }) => css`
    max-width: 1400px;
    padding-right: ${theme.spacing.mobile};
    padding-left: ${theme.spacing.mobile};
    margin: 40px 0 80px;
  `}
`
