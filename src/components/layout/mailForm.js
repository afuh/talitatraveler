import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

import { Spinner, Envelope } from '../../utils/UI/icons'
import { Form, Input, Submit, Fieldset } from '../../utils/UI/'

const msg = {
  invalidEmail: 'Esta dirección de correo parece falsa o no váldia, por favor tratá con otra 😉',
  tooManyRequests: 'Demasiadas solicitudes de registro! 🤔'
}

const Wrapper = styled.div`
  padding: 10px 30px;
  position: relative;
  width: 600px;

  h3 {
    font-weight: 900;
    margin-bottom: 4px;

  }
`

const Message = styled.span`
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 20px;
  color: ${({ theme }) => theme.black};

  ${({ error }) => error && css`
    color: #F44336;
  `}
`

const Subscription = styled(Form)`

  .email {
    background: #fff;
    display: flex;
    padding: 10px;

    .icon {
      flex-basis: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    svg {
      width: 60%;
      height: 60%;
    }

    input,
    button {
      border-radius: 0;
    }

    input {
      font-size: 1.8rem;
      vertical-align: middle;
      background: transparent;
      margin: 0;

      &::placeholder {
        color: #9b9b9b;
        font-size: 1.8rem;
      }
    }

    button {
      padding: 10px;
      border: none;

      :active,
      :focus,
      :hover {
        background: ${({ theme }) => theme.lightGray};
      }
    }
  }
`

const SpinWrapper = styled.div`
  position: absolute;
  top: 0;
  background: transparent;

  min-width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

const DisplayMessage = ({ response }) => {
  let message = response.msg ? response.msg.replace(/([0-9]|-)/g, '').trim() : ''

  if (message.includes('Ya estás suscrito')) {
    [ message ] = message.split('<')
  }

  if (message.includes('This email address looks fake or invalid')) {
    message = msg.invalidEmail
  }

  if (message.includes('has too many recent signup requests')) {
    message = msg.tooManyRequests
  }

  return (
    <Message
      error={response.result && response.result === 'error' && true}>
      {message}
    </Message>
  )
}

DisplayMessage.propTypes = {
  response: PropTypes.object.isRequired
}

const Spin = () => (
  <SpinWrapper>
    <Spinner color={'#FF5722'} />
  </SpinWrapper>
)

class MailForm extends Component {
  state = {
    email: '',
    response: null,
    loading: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email } = this.state

    if (isEmpty(email)) return

    this.setState({ loading: true })

    if (!isEmail(email)) {
      this.setState({
        response: {
          result: "error",
          msg: msg.invalidEmail
        },
        loading: false
      })
      return
    }

    const response = await addToMailchimp(normalizeEmail(email))

    this.setState({
      loading: false,
      email: '',
      response
    })
  }

  render(){
    const { response, loading, email } = this.state

    return (
      <Wrapper>
        <h3>Suscribite a Talita Traveler</h3>
        <span>Recibí los últimos posts directamente en tu casilla de E-mail</span>
        <Fieldset disabled={loading}>
          <Subscription
            method='post'
            blur={loading}
            onSubmit={this.handleSubmit}
          >
            <div className='email'>
              <div className='icon'>
                <Envelope color='#9b9b9b'/>
              </div>
              <Input
                required
                placeholder='tu@email.com'
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Submit>
                Enviar
              </Submit>
            </div>
            {response && <DisplayMessage response={response} />}
          </Subscription>
        </Fieldset>
        {loading && <Spin />}
      </Wrapper>
    )
  }
}

export default MailForm
