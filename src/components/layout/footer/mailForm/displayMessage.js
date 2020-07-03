import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { msg } from '../../../../utils/hooks/useMailChimp'

const Message = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 20px;
  color: ${({ theme }) => theme.black};

  ${({ error }) =>
    error &&
    css`
      color: #f44336;
    `}
`

const DisplayMessage = ({ response }) => {
  let message = response.msg ? response.msg.replace(/([0-9]|-)/g, '').trim() : ''

  if (message.includes('Ya estás suscrito')) {
    // eslint-disable-next-line prefer-destructuring
    message = message.split('<')[0]
  }

  if (
    message.includes('This email address looks fake or invalid') ||
    message.includes('invalid email address and cannot be imported.')
  ) {
    message = msg.invalidEmail
  }

  if (message.includes('many recent signup requests') || message.includes('many subscribe attempts')) {
    message = msg.tooManyRequests
  }

  return <Message error={response.result && response.result === 'error' && true}>{message}</Message>
}

DisplayMessage.propTypes = {
  response: PropTypes.object.isRequired,
}

export default DisplayMessage
