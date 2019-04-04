import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Search from './search'
import { CategoryList, Section, SectionHeader } from '../../utils/UI'
import { fontSize } from '../../utils/style'

const Wrapper = styled(Section)`
  padding-top: 20px;

  h3 {
    ${fontSize(3.2)};
    font-weight: 900;
  }
`

const Categories = ({ categories, location }) => (
  <>
    <SectionHeader text='Categorías' />
    <Wrapper margin={2} style={{ marginTop: 20 }}>
      <CategoryList
        big
        categories={categories}
      />
      <Search
        location={location}
      />
    </Wrapper>
  </>
)

Categories.propTypes = {
  location: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired
}

export default Categories
