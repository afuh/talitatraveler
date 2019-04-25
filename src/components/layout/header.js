import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { media } from '../../utils/style'

const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: 800;
  font-size: 2rem;
  padding: 1.4rem 2rem;

  &:hover,
  &:active,
  &:focus,
  &.active {
    text-decoration: none;
    color: ${({ theme }) => theme.mainColor};
  }

  ${media.phone(css`
    font-size: 1.6rem;
    padding: 1.4rem;
  `)}
`
const Header = ({ nav, height }) => (
  <Content style={{ height }}>
    {nav.map(item => (
      <NavLink
        partiallyActive={item.path.length > 1}
        activeClassName='active'
        key={item.name}
        to={item.path}
      >
        <span>{item.name}</span>
      </NavLink>
    ))}
  </Content>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired
}

export default Header
