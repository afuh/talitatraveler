import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Search from './search'
import { CategoryList, Section } from '../../utils/UI'
import { fontSize } from '../../utils/style'

const Wrapper = styled(Section)`
  padding-top: 20px;

  h3 {
    ${fontSize(3.2)};
    font-weight: 900;
  }
`

const Categories = ({ categories }) => (
  <Wrapper margin={2} style={{ marginTop: 20 }} as="div">
    <CategoryList big categories={categories} />
    <Search />
  </Wrapper>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Categories
