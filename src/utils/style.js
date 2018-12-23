import { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212129",
  white: "#F9F9FA",
  gray: "#9F9FA3",
  deeporange: "#FF5722",
  shadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)'
}

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480
}

export const media = {
  mobile: inner => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: inner => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: inner => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `
}

export const flex = opt => css`
  display: flex;

  flex-direction: ${opt.dir|| "row"};
  justify-content: ${opt.x || "center"};
  align-items: ${opt.y || "center"};
`

export const hover = inner => css`
  &:hover,
  &:focus {
    ${inner}
  }
`

export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/5)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/4)}rem;
  `)}
`

const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif'
].join()

export const GlobalStyle = createGlobalStyle`
  *::selection {
    color: ${theme.white};
    background: ${theme.black};
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    letter-spacing: 0.02rem;
    font-family: ${defaultFont};
  }

  h1 { ${fontSize(3.2)}; }
  h2 { ${fontSize(2.4)}; }
  h3 { ${fontSize(1.9)}; }

  a {
    color: ${theme.black};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.deeporange};
      text-decoration: none;
    }
  }

  p {
    font-size: 1.4rem;
  }

  button, input {
    &:focus {
      outline: 0;
    }
  }
`
