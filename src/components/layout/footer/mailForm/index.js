import React, { useState } from 'react'
import styled from 'styled-components'

import { Envelope } from '../../../../utils/UI/icons'
import { Form, Input, Submit, Fieldset } from '../../../../utils/UI/'

import { useMailChimp } from '../../../../utils/hooks'
import DisplayMessage from './displayMessage'
import Header from './header'
import LoadingOverlay from './loadingOverlay'

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  user-select: ${(p) => p.isLoading && 'none'};
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

const MailForm = () => {
  const [email, setEmail] = useState('')
  const { handleSubmit, loading, response } = useMailChimp(email)

  return (
    <Wrapper isLoading={loading}>
      <Fieldset disabled={loading} isLoading={loading}>
        <Header />
        <Subscription method="post" blur={loading} onSubmit={handleSubmit}>
          <div className="email">
            <div className="icon">
              <Envelope color="#9b9b9b" />
            </div>
            <Input
              aria-label="email"
              required
              placeholder="tu@email.com"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Submit>Enviar</Submit>
          </div>
          {response && <DisplayMessage response={response} />}
        </Subscription>
      </Fieldset>
      {loading && <LoadingOverlay />}
    </Wrapper>
  )
}

export default MailForm
