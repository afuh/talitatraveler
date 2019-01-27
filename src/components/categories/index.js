import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import { CategoryList, Section } from '../../utils/UI'

const Categories = ({ categories }) => (
  <Section margin={2}>
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
  </Section>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired
}

export default Categories
