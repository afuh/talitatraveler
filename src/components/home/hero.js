import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'
import { FaChevronDown } from 'react-icons/fa'
import { scroller } from 'react-scroll'

const Icon = styled(FaChevronDown)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1)
  }

  transition: transform 0.2s ease-in;
`

const Wrapper = styled.div`
  ${({ theme }) => theme && css`
    min-height: calc(100vh - ${theme.headerHeight}px);
  `};

  display: flex;
  flex-direction: column;

  .icon-wrapper {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
  }
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
    font-size: 6.0rem;
    letter-spacing: 0.1em;
    text-align: center;
    line-height: 0.6;
  }
`

const HeaderImage = ({ image, children }) => (
  <div style={{ position: 'relative' }}>
    <GatsbyImg
      style={{ height: 480 }}
      fluid={image.fluid}
      alt={image.description}
      title={image.description}
    />
    <Overlay>{children}</Overlay>
  </div>
)

HeaderImage.propTypes = {
  image: PropTypes.object.isRequired
}

const Hero = ({ scrollId }) => {
  const { content: { heroTitle, heroImage } } = useStaticQuery(query)

  return (
    <Wrapper>
      <HeaderImage image={heroImage}>
        <h1>{heroTitle}</h1>
      </HeaderImage>
      <div className='icon-wrapper'>
        <Icon
          onClick={() => scroller.scrollTo(scrollId, {
            duration: 1000,
            smooth: "easeOutQuint",
            offset: -20
          })}
        />
      </div>
    </Wrapper>
  )
}

Hero.propTypes = {
  scrollId: PropTypes.string.isRequired
}

const query = graphql`
  query HERO_QUERY {
    content: contentfulContent {
      heroTitle
      heroImage {
        description
        fluid(maxWidth: 2000) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

export default Hero
