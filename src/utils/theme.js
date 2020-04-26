import { css } from 'styled-components'

const screenBreak = {
  mobile: 992,
  phone: 650,
  small: 480,
  medium: 1024,
  xlarge: 1920,
  xxlarge: 2560,
}

const media = {
  mobile: (inner) => css`
    @media (max-width: ${screenBreak.mobile / 16}em) {
      ${inner}
    }
  `,
  phone: (inner) => css`
    @media (max-width: ${screenBreak.phone / 16}em) {
      ${inner}
    }
  `,
  small: (inner) => css`
    @media (max-width: ${screenBreak.small / 16}em) {
      ${inner}
    }
  `,
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
      ${inner}
    }
  `,
  medium: (inner) => css`
    @media (min-width: ${screenBreak.medium / 16}em) {
      ${inner}
    }
  `,
  xlarge: (inner) => css`
    @media (min-width: ${screenBreak.xlarge / 16}em) {
      ${inner}
    }
  `,
  xxlarge: (inner) => css`
    @media (min-width: ${screenBreak.xxlarge / 16}em) {
      ${inner}
    }
  `,
}

const fontSize = (size) => css`
  font-size: ${size}rem;

  ${media.mobile(css`
    font-size: ${size - size / 12}rem;
  `)}

  ${media.phone(css`
    font-size: ${size - size / 10}rem;
  `)}

  ${media.xxlarge(css`
    font-size: ${size * 1.2}rem;
  `)}
`

export default {
  black: '#212129',
  white: '#fff',
  gray: '#9F9FA3',
  lightGray: 'rgba(239, 243, 245, 0.5)',
  mainColor: '#008080',
  secondaryColor: '#FC4A1A',
  shadow: 'rgba(8, 35, 51, 0.03) 0px 0px 2px, rgba(8, 35, 51, 0.05) 0px 3px 6px',
  innerShadow: 'rgba(0, 0, 0, 0.02) 1px -3px 9px 3px inset',
  transition: 'all .2s ease',
  headerHeight: 80,
  fontSize,
  media: {
    ...media,
  },
}
