import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import slugify from '@sindresorhus/slugify'

const Wrapper = styled.section`
  ${({ theme, big }) => css`
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0 48px 0;

    ${big &&
    css`
      margin: 0;
      a.category {
        font-size: 2rem;
        margin: 0 8px 8px 0;
        padding: 10px 20px;

        ${theme.media.phone(css`
          flex: 1;
          margin: 4px;
          text-align: center;
          font-size: 1.5rem;
        `)}
      }
    `};
  `}
`

const Link = styled(GatsbyLink).attrs({
  className: 'category',
})`
  ${({ theme }) => css`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: bold;
    padding: 8px;
    margin-right: 4px;
    background: ${theme.lightGray};
    color: ${theme.gray};

    &:hover {
      text-decoration: none;
      color: #fff;
      box-shadow: ${theme.shadow};
      background: ${theme.mainColor};
    }
  `}
`

export const CategoryList = ({ categories, style, big }) => (
  <Wrapper big={big}>
    {categories &&
      categories.map((category) => (
        <Link style={{ ...style }} key={category} to={`/categorias/${slugify(category)}`}>
          {category}
        </Link>
      ))}
  </Wrapper>
)

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  style: PropTypes.object,
  big: PropTypes.bool,
}

CategoryList.defaultProps = {
  big: false,
}
