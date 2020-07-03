import { css } from 'styled-components'

/**
 * Convert pixel value to rems
 * @param {number} pxVal
 */
const rem = (pxVal) => `${(pxVal + '').split('').join('.')}rem`

const screenBreak = {
  mobile: 992,
  phone: 650,
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
  custom: (n, inner) => css`
    @media (max-width: ${n / 16}em) {
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

  ${media.custom(
    screenBreak.xxlarge,
    css`
      font-size: ${size * 1.2}rem;
    `,
  )}
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
  spacing: {
    mobile: '5%',
    rem,
    _4: rem(4),
    _8: rem(8),
    _12: rem(12),
    _16: rem(16),
    _20: rem(20),
    _24: rem(24),
    _28: rem(28),
    _32: rem(32),
    _36: rem(36),
    _40: rem(40),
  },
  media: {
    ...media,
  },
}
