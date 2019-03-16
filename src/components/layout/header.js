import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Content = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.black};
  font-weight: 700;
  font-size: 2rem;
  padding: 1.4rem 2rem;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: ${({ theme }) => theme.mainColor};
  }

  &.${({ activeClassName }) => activeClassName} {
    color: ${({ theme }) => theme.mainColor};
  }
`

NavLink.defaultProps = {
  activeClassName: 'active'
}

const Header = ({ nav, height }) => (
  <Content style={{ height }}>
    {nav.map(item => (
      <NavLink
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
