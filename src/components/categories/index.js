import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { CategoryList, Container as _Container, Divider } from '../../utils/UI'
import Search from './search'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled(_Container)`
  padding-top: 20px;

  h3 {
    ${({ theme }) => theme.fontSize(3.2)};
    font-weight: 900;
  }
`

const Categories = ({ categories }) => (
  <>
    <Divider text="Categorías" />
    <Wrapper>
      <Container>
        <CategoryList big categories={categories} />
        <Search />
      </Container>
    </Wrapper>
  </>
)

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
}

export default Categories
