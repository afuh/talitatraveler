import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { theme } from '../../utils/style'

const Content = styled.header`
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  padding: 20px;
`

const Header = ({ nav }) => (
  <Content>
    {nav.map(item => (
      <Link
        activeStyle={{ color: theme.deeporange }}
        style={{ marginRight: 10 }}
        key={item.name}
        to={item.path}
      >
        {item.name}
      </Link>
    ))}
  </Content>
)

Header.propTypes = {
  nav: PropTypes.array.isRequired
}

export default Header
