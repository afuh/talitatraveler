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

const Categories = ({ categories, location }) => (
  <Wrapper margin={2}>
    <CategoryList
      big
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
