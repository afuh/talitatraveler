import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { categoryToSlug } from '../../utils/helpers'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Link = styled(GatsbyLink)`
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

export const CategoryList = ({ categories, style }) => (
  <Wrapper>
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
  style: PropTypes.object
}
