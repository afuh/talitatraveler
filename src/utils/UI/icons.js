/* eslint  max-len: 0 */
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Svg = styled.svg`
  ${({ size }) => css`
    width: ${size || 6}%;
    height: ${size || 6}%;
  `}

  path {
    fill: ${({ theme, color }) => color || theme.mainColor};
  }
`

export const Spinner = ({ size, color }) => (
  <Svg size={size} viewBox="0 0 40 40" color={color}>
    <path opacity="0.2" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
    <path d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
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

export const Envelope = ({ size, color }) => (
  <Svg size={size} viewBox="0 0 20 20" color={color}>
    <g fillRule="evenodd" clipRule="evenodd">
      <path d="M3.333 4.167A.838.838 0 0 0 2.5 5v10c0 .456.377.833.833.833h13.334A.838.838 0 0 0 17.5 15V5a.838.838 0 0 0-.833-.833H3.333zM.833 5c0-1.377 1.124-2.5 2.5-2.5h13.334c1.377 0 2.5 1.123 2.5 2.5v10c0 1.377-1.123 2.5-2.5 2.5H3.333a2.505 2.505 0 0 1-2.5-2.5V5z"></path>
      <path d="M.984 4.522a.833.833 0 0 1 1.16-.205L10 9.817l7.856-5.5a.833.833 0 0 1 .955 1.366l-8.333 5.833c-.287.2-.669.2-.956 0L1.19 5.683a.833.833 0 0 1-.205-1.16z"></path>
    </g>
  </Svg>
)

Envelope.propTypes = {
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
    // capitalize the name
    name = name.replace(/\b\w/g, l => l.toUpperCase())

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
