import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { SocialIcon } from '../../utils/UI/icons'
import MailForm from './mailForm'

const Content = styled.footer`
  background: ${({ theme }) => theme.lightGray};
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconsWrapper = styled.div`
  display: flex;
`

const SocialIcons = ({ social }) => (
  <IconsWrapper>
    {social.map(item => (
      <SocialIcon
        key={item.name}
        name={item.name}
        href={item.url}
      />
    ))}
  </IconsWrapper>
)

SocialIcons.propTypes = {
  social: PropTypes.array.isRequired
}

const Footer = ({ social, height }) => (
  <Content style={{ height }} >
    <SocialIcons social={social} />
    <MailForm />
  </Content>
)

Footer.propTypes = {
  social: PropTypes.array.isRequired,
  height: PropTypes.number.isRequired
}

export default Footer
