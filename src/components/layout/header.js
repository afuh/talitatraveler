import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Content = styled.header`
  background: ${({ theme }) => theme.white};
  padding: 20px;
  display: flex;
  align-items: center;
`

const NavLink = styled(Link)`
  color: black;
  font-weight: 900;
  font-size: 1.8rem;
  padding: 1.4rem 2rem;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }

  &.${({ activeClassName }) => activeClassName} {
    color: ${({ theme }) => theme.mainColor};
  }

  transition: ${({ theme }) => theme.transition};
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
        {item.name}
      </NavLink>
    ))}
  </Content>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired
}

export default Header
