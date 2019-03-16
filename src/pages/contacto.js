import React from 'react'

import SEO from '../utils/seo'
import { useSiteMeta } from '../utils/hooks'
import Layout from '../components/layout'
import Contact from '../components/contact'

const AboutPage = () => {
  const { external, email } = useSiteMeta()

  return (
    <Layout>
      <SEO title='Contacto' />
      <Contact contact={{ external, email }} />
    </Layout>
  )
}

export default AboutPage
