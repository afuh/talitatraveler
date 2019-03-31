import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

import { Envelope } from '../../../../utils/UI/icons'
import { Form, Input, Submit, Fieldset } from '../../../../utils/UI/'

import DisplayMessage from './displayMessage'
import Header from './header'
import msg from './messages'
import LoadingOverlay from './loadingOverlay'

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  fieldset {
    ${({ loading }) => loading && css`
      filter: blur(2px);
    `};
  }
`

const Subscription = styled(Form)`
  .email {
    background: #fff;
    display: flex;
    padding-left: 8px;

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
      margin: 4px 0;

      &::placeholder {
        color: ${({ theme }) => theme.gray};
        font-size: 1.8rem;
      }
    }

    button {
      padding: 0 20px;
      border: 1px solid transparent;

      :active,
      :focus,
      :hover {
        border: 1px solid ${({ theme }) => theme.mainColor};
      }
    }
  }
`

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
      <Wrapper loading={loading}>
        <Fieldset disabled={loading}>
          <Header />
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
        {loading && <LoadingOverlay />}
      </Wrapper>
    )
  }
}

export default MailForm
