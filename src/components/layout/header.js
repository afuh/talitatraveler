import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { media } from '../../utils/style'

const Wrapper = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.headerHeight}px;
  `}

  ${({ withImage }) =>
    withImage &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    `}
`

const NavLink = styled(Link)`
  ${({ theme, itemColor }) => css`
    color: ${theme[itemColor]};
    font-weight: 800;
    font-size: 2rem;
    padding: 1.4rem 2rem;

    &:hover,
    &:active,
    &:focus,
    &.active {
      text-decoration: none;
      color: ${theme.mainColor};
    }

    ${media.phone(css`
      font-size: 1.6rem;
      padding: 1.4rem;
    `)}
  `}
`
const Header = ({ nav, withImage }) => (
  <Wrapper withImage={withImage}>
    {nav.map((item) => (
      <NavLink
        itemColor={withImage ? 'white' : 'black'}
        partiallyActive={item.path.length > 1}
        activeClassName="active"
        key={item.name}
        to={item.path}
      >
        <span>{item.name}</span>
      </NavLink>
    ))}
  </Wrapper>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired,
  withImage: PropTypes.bool,
}

export default Header
