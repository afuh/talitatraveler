import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard, MoreButton } from '../../../utils/UI'
import { withPostCounter } from '../../../utils/context/postsToShow'

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${p => p.hide && css`
    display: none;
  `};
`

const LatestsPosts = ({ edges, totalCount, postsToShow, onShowMorePosts }) => (
  <div>
    {edges.map((post, i) => i < postsToShow && (
      <PostCard
        key={post.node.id}
        node={post.node}
      />
    ))}
    <ButtonWrapper
      hide={postsToShow > totalCount}
    >
      <MoreButton
        onClick={onShowMorePosts}
      >
        Ver más
      </MoreButton>
    </ButtonWrapper>
  </div>
)

LatestsPosts.propTypes = {
  edges: PropTypes.array.isRequired,
  totalCount: PropTypes.number.isRequired,
  postsToShow: PropTypes.number.isRequired,
  onShowMorePosts: PropTypes.func.isRequired
}

export default withPostCounter(LatestsPosts)
