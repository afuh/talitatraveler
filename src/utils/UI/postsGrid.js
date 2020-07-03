import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from './'
import { usePostCounter } from '../hooks'

const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${theme.media.phone(css`
      flex-direction: column;
    `)}
  `}
`

const MoreButton = styled.button`
  ${({ theme }) => css`
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    cursor: pointer;

    box-shadow: ${theme.shadow};
    background: ${theme.white};
    color: ${theme.mainColor};
    border: 2px solid ${theme.mainColor};

    transition: ${theme.transition};

    &:hover {
      background: ${theme.mainColor};
      color: ${theme.white};
    }
  `}
`

const ButtonWrapper = styled.div`
  justify-content: center;
  padding: 80px 0;
  display: ${(p) => (p.hide ? 'none' : 'flex')};
`

export const PostsGrid = ({ totalCount, posts }) => {
  const { postsToShow, onShowMorePosts } = usePostCounter()
  const count = totalCount ? postsToShow : Infinity

  return (
    <section>
      <Wrapper>{posts.map((post, i) => i < count && <PostCard key={post.id} post={post} />)}</Wrapper>

      {totalCount && (
        <ButtonWrapper hide={postsToShow > totalCount}>
          <MoreButton onClick={onShowMorePosts}>Cargar más</MoreButton>
        </ButtonWrapper>
      )}
    </section>
  )
}

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalCount: PropTypes.number,
}
