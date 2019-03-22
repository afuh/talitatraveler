import styled, { css, createGlobalStyle } from 'styled-components'

export const theme = {
  black: "#212129",
  white: "#fff",
  gray: "#9F9FA3",
  lightGray: "#f6f6f6",
  mainColor: "#008080",
  shadow: '0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08)',
  transition: 'all .2s ease',
  categoryPadding: '20px',
  headerHeight: 120
}

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480,
  medium: 1024,
  xlarge: 1920,
  xxlarge: 2560
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
  `,

  medium: inner => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: inner => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: inner => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `
}

export const fontSize = size => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - (size/12)}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - (size/10)}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size * 1.2}rem;
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
    background: ${theme.mainColor};
  }

  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    background: ${theme.white};
    color: ${theme.black};
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
    color: ${theme.mainColor};
    text-decoration: none;

    &:hover,
    &:active,
    &:focus {
      color: ${theme.mainColor};
      text-decoration: underline;
    }
  }

  p, li, figcaption {
    font-family: 'Noto Serif KR', serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.5;
  }

  img {
    width: 100%;
  }

  input {
    ${media.phone(css`
      font-size: 1.6rem;
    `)}
  }

  button, input {
    &:focus {
      outline: 0;
    }
  }

`

export const Article = styled.article`
  padding-bottom: 40px;
  position: relative;
  border-bottom: 1px solid #f8f8f8;

  p {
    white-space: ${({ whiteSpace }) => whiteSpace ? "pre-line" : "normal"}
  }

  ol, ul {
    margin: 0;
  }

  p, li {
    ${fontSize(1.6)};
    text-align: justify;

    ${media.phone(css`
      text-align: left;
    `)}

    strong {
      font-weight: 900;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    text-align: justify;
    font-weight: 800;
    margin: 3.0rem 0;

    ${media.phone(css`
      text-align: left;
    `)}
  }

  sup {
    margin: 0 0.2rem;
    line-height: 1;
  }

  .footnote-backref {
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }

  figure {
    margin: 0;
    figcaption {
      font-style: italic;
      font-size: 1.4rem;
      text-align: center;
      color: ${theme.black}80;
    }
  }

  .footnotes {
    margin-top: 24px;

    ol {
      margin-top: 14px;
    }

    li {
      margin-bottom: 12px;
      font-size: 1.4rem;
      p {
        font-size: 1.4rem;
        display: inline;
      }
    }
  }

  blockquote {
    color: ${theme.black}80;
    border-left: 2px solid rgba(0,0,0,0.13);
    padding-left: 2rem;
  }
`
