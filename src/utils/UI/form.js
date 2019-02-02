import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const inputBaseStyle = css`
  border: none;
  border-radius: 6px;
  background: whitesmoke;
  display: block;
  margin: 10px 0 20px;
  padding: 0.9rem;
  transition: .2s border-color;

  &:focus {
    outline: 0;
  }
`

export const Form = styled.form`
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  line-height: 1;
  text-transform: uppercase;
`

export const Input = styled.input`
  ${inputBaseStyle}
  width: 100%;
`

export const Textarea = styled.textarea`
  ${inputBaseStyle}
  height: 14rem;
  width: 100%;
`

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
`

export const Submit = styled.button`
  border-radius: 6px;
  border: 1px solid #00000020;
  padding: 10px 40px;
  font-size: 1.2rem;
  font-weight: 900;
  letter-spacing: 0.2em;
  line-height: 2;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  cursor: ${({ loading }) => !loading && "pointer"};

  ${({ loading, theme }) => !loading && css`
    :active,
    :focus,
    :hover {
      border: 1px solid ${theme.mainColor};
      color: ${theme.mainColor};
    }
  `}

  transition: ${({ theme }) => theme.transition};
`

Submit.propTypes = {
  loading: PropTypes.bool.isRequired
}

Submit.defaultProps = {
  loading: false
}