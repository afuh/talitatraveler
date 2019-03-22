import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'

import { categoryToSlug } from '../../utils/helpers'
import { media } from '../../utils/style'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${p => p.big && css`
    a.category {
      font-size: 2rem;
      margin: 0 8px 8px 0;
      padding: 10px 20px;

      ${media.phone(css`
        flex: 1;
        margin: 4px;
        text-align: center;
        font-size: 1.5rem;
      `)}
    }
  `}
`

const Link = styled(GatsbyLink).attrs({
  className: 'category'
})`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px;
  background: ${({ theme }) => theme.lightGray};
  margin-right: 4px;
  color: ${({ theme }) => theme.gray};

  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.mainColor};
    text-decoration: none;
  }

  transition: ${({ theme }) => theme.transition};
`

export const CategoryList = ({ categories, style, big }) => (
  <Wrapper big={big}>
    {categories.map(category => (
      <Link
        style={{ ...style }}
        key={category}
        to={`/categorias/${categoryToSlug(category)}`}
      >
        {category}
      </Link>
    ))}
  </Wrapper>
)


CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  style: PropTypes.object,
  big: PropTypes.bool
}

CategoryList.defaultProps = {
  big: false
}
