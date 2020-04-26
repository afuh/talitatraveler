import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { Time } from '../../utils/UI'

const Wrapper = styled.header`
  ${({ theme }) => css`
    padding-bottom: 40px;

    h1 {
      ${theme.fontSize(6)};

      color: ${theme.black};
      margin: 1.5rem 0;
      font-weight: 900;
      letter-spacing: 0.09rem;

      ${theme.media.phone(css`
        word-wrap: break-word;
        font-size: 4rem;
        hyphens: auto;
      `)}
    }

    h2 {
      margin-top: 0;
      font-weight: 800;
      ${theme.fontSize(2.2)};
    }

    span {
      font-size: 1.4rem;
      color: ${theme.gray};
    }
  `}
`

const Header = ({ post }) => (
  <Wrapper>
    <Time post={post} />
    <h1>{post.title}</h1>
    {post.subTitle && <h2>{post.subTitle}</h2>}
    <span>por</span> <Link to="/sobre-mi">Talita</Link>
  </Wrapper>
)

Header.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Header
