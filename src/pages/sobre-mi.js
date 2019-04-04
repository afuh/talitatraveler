import React from 'react'

import SEO from '../utils/seo'
import Layout from '../components/layout'
import About from '../components/about'

const AboutPage = () => (
  <Layout>
    <SEO title='Sobre mí' />
    <About />
  </Layout>
)

export default AboutPage
