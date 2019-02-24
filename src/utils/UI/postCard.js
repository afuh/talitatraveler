import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled, { css } from 'styled-components'

import { media } from '../style'
import { Time } from '../UI'

const Wrapper = styled(Link)`
  flex: 1;
  flex-basis: 33%;

  ${media.mobile(css`
    flex-basis: 50%;
  `)}
`

const Article = styled.article`
  display: flex;
  padding: 4px;

  .content {
    position: relative;
    flex: 1;
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 12px;
  z-index: 1;

  display: flex;
  justify-content: center;
  flex-direction: column;

  background: rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.white};

  time, h3 {
    color: #cfd0d1;
  }

  time, h2, h3 {
    text-align: center;
    margin: 0;
    transition: ${({ theme }) => theme.transition};
  }

  time {
    font-size: 1rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  &:hover,
  &:active,
  &:focus {
    background: rgba(0, 0, 0, 0.2);
    color: ${({ theme }) => theme.white};

    h3, time {
      opacity: 0;
    }

    h2 {
      opacity: 0.7;
    }
  }
`

export const PostCard = ({ node }) => (
  <Wrapper to={"/" + node.slug}>
    <Article>
      <div className='content'>
        <Overlay>
          <Time post={node} />
          <h2>{node.title}</h2>
          <h3>{node.subTitle}</h3>
        </Overlay>
        <GatsbyImg
          style={{ height: 240 }}
          fluid={node.headerImage.fluid}
          alt={node.headerImage.description}
          title={node.headerImage.description}
        />
      </div>
    </Article>
  </Wrapper>
)

PostCard.propTypes = {
  node: PropTypes.object.isRequired
}
