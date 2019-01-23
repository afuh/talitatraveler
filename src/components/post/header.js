import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

import { media, fontSize } from '../../utils/style'

const Wrapper = styled.header`
  padding-bottom: 40px;

  h1 {
    ${fontSize(6)};

    color: ${({ theme }) => theme.black};
    margin: 1.5rem 0;
    font-weight: 900;
    letter-spacing: 0.09rem;

    ${media.phone(css`
      font-size: 4rem;
    `)}
  }

  time p,
  span  {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.gray};
  }
`

const Header = ({ post }) => (
  <Wrapper>
    <time dateTime={(post.date || post.createdAt).replace(/\//g, "-")}>
      <p>{post.date || post.createdAt}</p>
    </time>
    <h1>{post.title}</h1>
    <span>por</span> <Link to='/contacto'>{post.author.name}</Link>
  </Wrapper>
)

Header.propTypes = {
  post: PropTypes.object.isRequired
}


export default Header
