import React, { Component } from 'react'
import styled from 'styled-components'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

import { Spinner } from '../../utils/UI/icons'
import { Form, Label, Input, Textarea, Submit, Fieldset } from '../../utils/UI/'

const SubmitArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
    loading: false,
    notification: null
  }

  handleNotification(notification) {
    this.setState({ notification })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const { email, name, message } = this.state

    if (isEmpty(name) || isEmpty(message) || isEmpty(email)) {
      return this.handleNotification('Por favor, completá todos los campos.')
    }

    if (!isEmail(email)) {
      return this.handleNotification('Por favor, ingresá una dirección de correo valida.')
    }

    await this.handleFetch({
      email: normalizeEmail(email),
      name: name.trim(),
      message: message.trim()
    })
  }


  async handleFetch({ ...data }) {
    const encode = data => Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")

    try {
      this.setState({ loading: true })

      await fetch("/?no-cache=1", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...data
        })
      })
      this.handleNotification('Gracias, el mensaje se ha enviado exitosamente.')

    } catch (error) {
      this.handleNotification(error.message)

    } finally {
      this.setState({
        name: '',
        email: '',
        message: '',
        loading: false
      })
    }
  }

  render(){
    const { name, email, message, loading, notification } = this.state

    return (
      <Fieldset
        disabled={loading}
      >
        <Form
          name='contact'
          method='post'
          data-netlify="true"
          data-netlify-honeypot="last-name"
          onSubmit={this.handleSubmit}
        >
          <Label style={{ display: "none" }}>
            Don’t fill out this field if you’re a human.
            <Input type="text" name="last-name" />
          </Label>

          <Label>
            Nombre
            <Input
              onChange={this.handleChange}
              value={name}
              type="text"
              name="name"
              required
            />
          </Label>
          <Label>
            E-mail
            <Input
              onChange={this.handleChange}
              value={email}
              type="email"
              name="email"
              required
            />
          </Label>
          <Label>
            Mensaje
            <Textarea
              onChange={this.handleChange}
              value={message}
              name="message"
              placeholder='Hola!'
              required
            />
          </Label>
          <SubmitArea>
            {notification && <p style={{ marginRight: 20 }}>{notification}</p>}
            <Submit
              isLoading={loading}
              type="submit"
            >
              {loading ? <Spinner /> : "Enviar"}
            </Submit>
          </SubmitArea>

          <Input
            type="hidden"
            name="form-name"
            value="contact"
          />
        </Form>
      </Fieldset>
    )
  }
}

export default ContactForm
