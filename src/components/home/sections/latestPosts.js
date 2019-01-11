import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from '../../../utils/UI'
import { withPostCounter } from '../../../utils/context/postsToShow'

const Button = styled.button`
  width: 100px;
  height: 100px;

  border: none;
  border-radius: 100%;

  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;

  cursor: pointer;

  ${({ theme }) => theme && css`
    background: ${theme.white};
    box-shadow: ${theme.shadow};
  `};

  &:hover {
    ${({ theme }) => theme && css`
      background: ${theme.mainColor};
      color: ${theme.white};
    `};
  }

  transition: all .2s;
`

const LatestsPosts = ({ edges, postsToShow, onShowMorePosts }) => (
  <div>
    {edges.map((post, i) => i < postsToShow && (
      <PostCard
        key={post.node.id}
        node={post.node}
      />
    ))}
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Button
        onClick={onShowMorePosts}
      >
        Ver más
      </Button>
    </div>
  </div>
)

LatestsPosts.propTypes = {
  edges: PropTypes.array.isRequired,
  postsToShow: PropTypes.number.isRequired,
  onShowMorePosts: PropTypes.func.isRequired
}

export default withPostCounter(LatestsPosts)
