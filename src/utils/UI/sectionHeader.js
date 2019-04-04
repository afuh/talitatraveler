import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme && css`
    background: ${theme.lightGray};
    box-shadow: ${theme.innerShadow};
  `};

  h2 {
    margin: 0;
    text-align: center;
    font-size: 2.8rem;
  }
`

export const SectionHeader = ({ text, ...rest }) => (
  <Wrapper {...rest}>
    <h2>{text}</h2>
  </Wrapper>
)

SectionHeader.propTypes = {
  text: PropTypes.string.isRequired
}