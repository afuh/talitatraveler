import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const border = css`
  span {
    border-bottom: 3px solid ${({ theme }) => theme.mainColor};
  }
`

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
    color: ${({ theme }) => theme.black};
    ${border}
  }

  &.${({ activeClassName }) => activeClassName} {
    ${border}
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
