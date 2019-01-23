/* eslint  max-len: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Svg = styled.svg`
  ${({ size }) => css`
    width: ${size || 6}%;
    height: ${size || 6}%;
  `}
`

export const Spinner = ({ size, color }) => (
  <Svg size={size} viewBox="0 0 40 40">
    <path opacity="0.2" fill={color || '#000'} d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
    <path fill={color || '#000'} d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z">
      <animateTransform attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 20 20"
        to="360 20 20"
        dur="0.5s"
        repeatCount="indefinite"
      />
    </path>
  </Svg>
)

Spinner.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string
}

export const SocialWrapper = styled.a`
  border: none;
  border-radius: 50%;
  margin: 20px 20px 20px 0;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.black};

  display: flex;
  align-items: center;

  :hover {
    color: ${({ theme }) => theme.mainColor};
  }

  transition: color .3s;
`

export const SocialIcon = ({ name, href, style, as }) => {
  const findIcon = name => {
    const Component = require("react-icons/fa")['Fa' + name]
    return <Component />
  }

  return (
    <SocialWrapper
      href={href}
      style={{ ...style }}
      as={as}
    >
      {findIcon(name)}
    </SocialWrapper>
  )
}

SocialIcon.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  style: PropTypes.object,
  name: PropTypes.string.isRequired
}
