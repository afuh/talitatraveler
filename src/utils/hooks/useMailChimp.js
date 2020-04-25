import { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import { isEmail, isEmpty, normalizeEmail } from 'validator'

export const msg = {
  invalidEmail: 'Esta dirección de correo parece falsa o no váldia, por favor tratá con otra.',
  tooManyRequests: 'Demasiadas solicitudes de registro! 🤔',
}

export const useMailChimp = (email) => {
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (isEmpty(email)) {
      return
    }

    setLoading(true)

    if (!isEmail(email)) {
      setResponse({
        result: 'error',
        msg: msg.invalidEmail,
      })

      setLoading(false)
      return
    }

    const mailChimpRes = await addToMailchimp(normalizeEmail(email))

    setResponse(mailChimpRes)
    setLoading(false)
  }

  return { handleSubmit, loading, response }
}
