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

  ${media.phone(css`
    flex-direction: column;
  `)}
`

const MoreButton = styled.button`
  border: none;
  font-size: 1.8rem;
  font-weight: 700;
  padding: 1rem 2rem;

  display: flex;
  align-items: center;
  cursor: pointer;

  ${({ theme }) => theme && css`
    background: ${theme.white};
    color: ${theme.mainColor};
    border: 2px solid ${theme.mainColor};
  `}

  &:hover {
    ${({ theme }) => theme && css`
      background: ${theme.mainColor};
      color: ${theme.white};
    `}
  }

  transition: ${({ theme }) => theme.transition};
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;

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
            key={post.node.id}
            node={post.node}
          />
        ))}
      </Wrapper>

      {totalCount &&
        <ButtonWrapper hide={postsToShow > totalCount}>
          <MoreButton onClick={onShowMorePosts}>
            Cargar más
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
