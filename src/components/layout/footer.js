import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const findIcon = name => {
  const Component = require("react-icons/fa")['Fa' + name]
  return <Component />
}

const Content = styled.footer`
  background: ${({ theme }) => theme.white};
  box-shadow: ${({ theme }) => theme.shadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.a`
  border: none;
  padding: 10px;
  margin: 10px;
  font-size: 22px;
  opacity: 0.6;
`

const Footer = ({ social }) => (
  <Content>
    {social.map(item => (
      <Icon
        key={item.icon}
        href={item.url}
      >
        {findIcon(item.icon)}
      </Icon>
    ))}
  </Content>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired
}

export default Footer
