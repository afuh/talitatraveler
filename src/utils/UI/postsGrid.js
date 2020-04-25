import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import { PostCard } from './'
import { media } from '../style'
import { sortPosts, edgesToNode } from '../helpers'
import { usePostCounter } from '../hooks'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${media.phone(css`
    flex-direction: column;
  `)}
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

export const PostsGrid = ({ edges, totalCount }) => {
  const { postsToShow, onShowMorePosts } = usePostCounter()
  const count = totalCount ? postsToShow : Infinity
  const posts = sortPosts(edgesToNode(edges))

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
  edges: PropTypes.array.isRequired,
  totalCount: PropTypes.number,
}
