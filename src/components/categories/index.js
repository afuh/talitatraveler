import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Search from './search'
import { CategoryList, Section } from '../../utils/UI'
import { fontSize } from '../../utils/style'

const Wrapper = styled(Section)`
  padding-top: ${({ theme }) => theme.categoryPadding};

  h3 {
    ${fontSize(3.2)};
    font-weight: 900;
  }
`

const CategoryStyle = {
  fontSize: "2rem",
  margin: '0 8px 8px 0',
  padding: "10px 20px"
}

const Categories = ({ categories, location }) => (
  <Wrapper margin={2}>
    <h3>Categorías</h3>
    <CategoryList
      style={CategoryStyle}
      categories={categories}
    />
    <Search
      location={location}
    />
  </Wrapper>
)

Categories.propTypes = {
  location: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default Categories
