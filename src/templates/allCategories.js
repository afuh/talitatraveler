import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Categories from '../components/categories'

const AllCategories = ({ pageContext: { allCategories }, location }) => (
  <Layout seo={{ title: 'Categorías' }}>
    <Categories categories={allCategories} location={location} />
  </Layout>
)

AllCategories.propTypes = {
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.shape({
    allCategories: PropTypes.array,
  }).isRequired,
}

export default AllCategories
