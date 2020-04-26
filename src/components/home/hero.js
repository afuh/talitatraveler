import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import styled from 'styled-components'

import { useSiteContent } from '../../utils/hooks'

const GatsbyImg = styled(Img)`
  height: 60vh;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.white};
    font-family: 'Noto Serif KR', serif;
    font-weight: 900;
    font-size: 7rem;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 0.6;
  }
`

const HeaderImage = ({ image, children }) => (
  <div style={{ position: 'relative' }}>
    <GatsbyImg fluid={image.fluid} alt={image.description} title={image.description} />
    <Overlay>{children}</Overlay>
  </div>
)

HeaderImage.propTypes = {
  image: PropTypes.object.isRequired,
}

const Hero = () => {
  const { heroTitle, heroImage } = useSiteContent()

  return (
    <section>
      <HeaderImage image={heroImage}>
        <h1>{heroTitle}</h1>
      </HeaderImage>
    </section>
  )
}

export default Hero
