import styled, { css, createGlobalStyle } from 'styled-components'

const defaultFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  'Oxygen-Sans',
  'Ubuntu',
  'Cantarell',
  '"Helvetica Neue"',
  'sans-serif',
].join()

export const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    *::selection {
      color: ${theme.white};
      background: ${theme.mainColor};
    }

    html {
      box-sizing: border-box;
      font-size: 10px;
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    body {
      background: ${theme.white};
      color: ${theme.black};
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      letter-spacing: 0.02rem;
      font-variant-ligatures: none;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
      text-decoration-skip-ink: auto;
      font-family: ${defaultFont};
    }

    a {
      color: ${theme.secondaryColor};
      text-decoration: none;

      &:hover,
      &:active,
      &:focus {
        color: ${theme.secondaryColor};
        text-decoration: underline;
      }
    }

    h1 {
      ${theme.fontSize(3.2)};
    }
    h2 {
      ${theme.fontSize(2.4)};
    }
    h3 {
      ${theme.fontSize(1.9)};
    }

    h1,
    h2,
    h3 {
      font-weight: 900;
    }

    p,
    li,
    figcaption {
      font-family: 'Noto Serif', serif;
      font-size: ${theme.spacing._16};
      line-height: 1.8;
      color: #000;
    }

    img {
      width: 100%;
    }

    input {
      ${theme.media.phone(css`
        font-size: ${theme.spacing._16};
      `)}
    }

    button,
    input {
      &:focus {
        outline: 0;
      }
    }
  `}
`

export const PostStyles = styled.section`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacing._40};
    position: relative;
    border-bottom: 1px solid ${theme.lightGray};

    p {
      white-space: ${({ whiteSpace }) => (whiteSpace ? 'pre-line' : 'normal')};
    }

    ol,
    ul {
      margin: 0;
    }

    p,
    li {
      font-size: ${theme.spacing.rem(18)};

      ${theme.media.phone(css`
        text-align: left;
      `)}

      strong {
        font-weight: 900;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 800;
      margin: 3rem 0;

      ${theme.media.phone(css`
        text-align: left;
      `)}
    }

    h3 {
      ${theme.media.phone(css`
        font-size: ${theme.spacing._20};
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
      border-left: 2px solid rgba(0, 0, 0, 0.13);
      padding-left: 2rem;
    }

    ${theme.media.phone(css`
      a {
        text-decoration: underline;
      }
    `)}
  `}
`
