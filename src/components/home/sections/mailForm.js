import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

import { Spinner } from '../../../utils/UI/icons'

const msg = {
  invalidEmail: 'Esta dirección de correo parece falsa o no váldia, por favor tratá con otra 😉',
  tooManyRequests: 'Demasiadas solicitudes de registro! 🤔'
}

const Wrapper = styled.section`
  margin: 20px 0;
  position: relative;

  fieldset {
    padding: 20px;
    margin: 0;
    border: none;
    background: ${({ theme }) => theme.white};
    background: whitesmoke;
  }
`

const Form = styled.form`
  display: flex;

  ${({ blur }) => blur && css`
    filter: blur(2px);
  `}

  transition: all .3s ease;
`

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.black};
  padding: 16px;

  width: 100%;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.deeporange};
    box-shadow: inset 0 2px 20px rgba(0,0,0,0.17);

    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.deeporange};
      transition: all .3s ease;
    }
  }
  transition: all .3s ease;
`

const Button = styled.button`
  box-shadow: ${({ theme }) => theme.shadow};
  border: none;
  cursor: pointer;
  margin: 0 10px;
  flex-basis: 30%;

  &:hover {
    color: ${({ theme }) => theme.deeporange};
  }

  transition: all .3s ease;
`

const Message = styled.p`
  margin: 24px 0 0;
  font-size: 14px;
  color: ${({ theme }) => theme.black};

  ${({ error }) => error && css`
    color: red;
  `}
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
        <fieldset
          disabled={loading}
        >
          <h2>Suscribite a Talita Traveler</h2>
          <p>Recibí los últimos posts directamente en tu casilla de E-mail</p>
          <Form
            onSubmit={this.handleSubmit}
            blur={loading}
          >
            <Input
              required
              placeholder='Tu dirección de E-mail'
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
            <Button>
              Enviar
            </Button>
          </Form>
          {response && <DisplayMessage response={response} />}
        </fieldset>
        {loading && <Spin />}
      </Wrapper>
    )
  }
}

export default MailForm
