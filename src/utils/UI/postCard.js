import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import GatsbyImg from 'gatsby-image'
import styled from 'styled-components'

import { timeToRead } from '../helpers'

const Article = styled.article`
  display: flex;

  border-bottom: 1px solid lightgray;
  padding: 32px;
  margin-bottom: 32px;
  box-shadow: rgba(27, 37, 64, 0.2) 0px 4px 4px 0px;

  :hover {
    box-shadow: rgba(27, 37, 64, 0.5) 0px 4px 4px 0px;
  }

  transition: box-shadow .3s ease;

  .content {
    flex: 1;
  }
`

export const PostCard = ({ node }) => (
  <Link
    to={node.slug}
  >
    <Article>
      <div className='content'>
        <h1>{node.title}</h1>
        <GatsbyImg
          style={{ width: '100%', height: 200 }}
          imgStyle={{ objectFit: "cover", objectPosition: 'top' }}
          fluid={node.headerImage.fluid}
          alt={node.headerImage.description}
          title={node.headerImage.description}
        />
        <div>
          <p>{node.date} - {timeToRead(node.content.md.timeToRead)}</p>
          <p>{node.content.md.excerpt}</p>
        </div>
      </div>
    </Article>
  </Link>
)

PostCard.propTypes = {
  node: PropTypes.object.isRequired
}
