import React from 'react'
import PropTypes from 'prop-types'
import { Link as GatsbyLink } from 'gatsby'
import styled from 'styled-components'

import { categoryToSlug } from '../../utils/helpers'

const Wrapper = styled.div`
  display: flex;
`

const Link = styled(GatsbyLink)`
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px;
  background: #f6f6f6;
  margin-right: 4px;
  color: ${({ theme }) => theme.gray};

  &:hover {
    color: #fff;
    background: ${({ theme }) => theme.mainColor};
    text-decoration: none;
  }

  transition: all .2s;
`

const Categories = ({ categories }) => (
  <Wrapper>
    {
      categories.map(category => (
        <Link
          key={category}
          to={`/categorias/${categoryToSlug(category)}`}
        >
          {category}
        </Link>
      ))
    }
  </Wrapper>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories
