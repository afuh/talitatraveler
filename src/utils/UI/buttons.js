import styled, { css } from 'styled-components'

export const MoreButton = styled.button`
  width: 100px;
  height: 100px;

  border: none;
  border-radius: 100%;

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;

  ${({ theme }) => theme && css`
    background: ${theme.white};
    box-shadow: ${theme.shadow};
  `};

  &:hover {
    ${({ theme }) => theme && css`
      background: ${theme.mainColor};
      color: ${theme.white};
    `};
  }

  transition: all .2s;
`
