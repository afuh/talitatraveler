import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.lightGray};

  h2 {
    margin: 0;
    text-align: center;
    font-size: 2.8rem;
  }
`

export const Separator = ({ text, ...rest }) => (
  <Wrapper {...rest}>
    <h2>{text}</h2>
  </Wrapper>
)

Separator.propTypes = {
  text: PropTypes.string.isRequired
}
