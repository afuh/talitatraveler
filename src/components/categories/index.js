import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Search from './search'
import { CategoryList, Section } from '../../utils/UI'
import { fontSize } from '../../utils/style'

const Wrapper = styled(Section)`
  padding-top: 4%;

  h3 {
    ${fontSize(3.2)};
    font-weight: 900;
  }
`

const Categories = ({ categories }) => (
  <Wrapper margin={2}>
    <h3>Categorías</h3>
    <CategoryList
      style={{
        fontSize: "2rem",
        margin: '0 8px 8px 0',
        padding: "10px 20px"
      }}
      categories={categories}
    />
    <Search />
  </Wrapper>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories
