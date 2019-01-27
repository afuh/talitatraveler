import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from './'
import { media } from '../style'
import { withPostCounter } from '../context/postsToShow'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 20px;

  ${media.phone(css`
    flex-direction: column;
  `)}
`

const MoreButton = styled.button`
  width: 120px;
  height: 120px;

  border: none;
  border-radius: 50%;
  font-size: 5.0rem;

  cursor: pointer;

  &:hover {
    ${({ theme }) => theme && css`
      background: ${theme.mainColor};
      color: ${theme.white};
    `};
  }

  transition: ${({ theme }) => theme.transition};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  ${({ hide }) => hide && css`
    display: none;
  `};
`

const Grid = ({ posts, totalCount, postsToShow, onShowMorePosts }) => {
  const count = totalCount ? postsToShow : Infinity

  return (
    <>
      <Wrapper>
        {posts.map((post, i) => i < count && (
          <PostCard
            mini
            key={post.node.id}
            node={post.node}
          />
        ))}
      </Wrapper>

      {totalCount &&
        <ButtonWrapper hide={postsToShow > totalCount}>
          <MoreButton onClick={onShowMorePosts}>
            ☟
          </MoreButton>
        </ButtonWrapper>
      }
    </>
  )
}

Grid.propTypes = {
  posts: PropTypes.array.isRequired,
  totalCount: PropTypes.number,
  postsToShow: PropTypes.number.isRequired,
  onShowMorePosts: PropTypes.func.isRequired
}

export const PostsGrid = withPostCounter(Grid)
