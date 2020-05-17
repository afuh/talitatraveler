import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const Wrapper = styled.header`
  ${({ theme, withImage }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${theme.headerHeight}px;

    ${withImage &&
    css`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 999;
    `}
  `}
`

const NavLink = styled(Link)`
  ${({ theme, color }) => css`
    color: ${theme[color]};
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

    ${theme.media.phone(css`
      font-size: 1.6rem;
      padding: 1.4rem;
    `)}
  `}
`
const Header = ({ nav, withImage }) => (
  <Wrapper withImage={withImage}>
    {nav.map((item) => (
      <NavLink
        color={withImage ? 'white' : 'black'}
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
