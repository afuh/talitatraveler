import React from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'
import Home from '../components/home'

const HomePage = () => (
  <Layout>
    <Home />
  </Layout>
)

HomePage.propTypes = {
  data: PropTypes.object.isRequired
}

export default HomePage
