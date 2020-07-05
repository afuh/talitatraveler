import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { navigate } from 'gatsby'

import { PostsGrid, Divider } from '../../utils/UI'
import { edgesToNode } from '../../utils/helpers'
import Hero from './hero'

const Button = styled.button`
  ${({ theme }) => css`
    border: none;
    font-family: 'Raleway', sans-serif;
    font-size: ${theme.spacing._16};
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
  display: flex;
  justify-content: center;
  padding: 40px 0;
`

const Home = ({ data: { posts } }) => (
  <>
    <Hero />
    <Divider text="Últimos posts" />
    <PostsGrid posts={edgesToNode(posts.edges)} />
    <ButtonWrapper>
      <Button onClick={() => navigate('/posts/2')}>Ver más</Button>
    </ButtonWrapper>
  </>
)

Home.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object,
  }).isRequired,
}

export default Home
