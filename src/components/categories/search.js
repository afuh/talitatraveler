import React, { useState, useEffect, useRef } from 'react'
import { useStaticQuery, graphql, navigate } from 'gatsby'
import { useLocation } from '@reach/router'
import styled, { css } from 'styled-components'
import Downshift from 'downshift'
import computeScrollIntoView from 'compute-scroll-into-view'

import ListItem from './listItem'

const searchWord = (search, post) => {
  const normalize = (str) =>
    str &&
    str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')

  const searchIn = (schema) => Object.values(schema).map((value) => normalize(value))

  const fields = searchIn({
    title: post.title,
    subTitle: post.subTitle,
    content: post.content.text,
  })

  return fields.some((str) => RegExp('\\b' + normalize(search), 'i').test(str))
}

const Wrapper = styled.section.attrs({
  id: 'buscar',
})`
  padding-top: 40px;
  margin-bottom: 80px;
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Input = styled.input`
  ${({ theme }) => css`
    caret-color: ${theme.mainColor};
    background: ${theme.lightGray};
    border: 2px solid ${theme.lightGray};

    flex: 1;
    display: block;
    border-radius: 0;
    padding: 2rem;
    transition: 0.2s border-color;

    &:focus {
      border: 2px solid ${theme.mainColor};
      outline: 0;
    }
  `};
`

const Search = () => {
  const { allContentfulPost } = useStaticQuery(query)
  const searchInput = useRef(null)
  const location = useLocation()
  const [posts, filterPosts] = useState(allContentfulPost.nodes)

  useEffect(() => {
    if (location.state && location.state.focus) {
      searchInput.current.focus()
    }
  }, [location.state])

  const filterByInput = (search) => {
    return allContentfulPost.nodes.reduce((acc, post) => {
      if (searchWord(search, post)) {
        acc.push(post)
      }
      return acc
    }, [])
  }

  return (
    <Wrapper>
      <Downshift
        itemToString={(post) => (post === null ? '' : post.title)}
        onChange={({ slug }) => navigate(slug)}
        scrollIntoView={(node) => {
          if (!node) return

          const [action] = computeScrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest',
          })

          if (!action) return

          action.el.scrollTop = action.top
          action.el.scrollLeft = action.left
        }}
      >
        {({ getInputProps, getItemProps, highlightedIndex, getMenuProps }) => (
          <div>
            <InputWrapper>
              <Input
                ref={searchInput}
                {...getInputProps({
                  name: 'search',
                  type: 'text',
                  placeholder: 'Filtrar...',
                  id: 'search',
                  onChange: (e) => {
                    e.persist()
                    filterPosts(filterByInput(e.target.value))
                  },
                })}
              />
            </InputWrapper>
            <div {...getMenuProps()}>
              {posts.map((post, index) => (
                <ListItem
                  key={post.slug}
                  post={post}
                  getItemProps={getItemProps}
                  highlighted={index === highlightedIndex}
                />
              ))}
            </div>
          </div>
        )}
      </Downshift>
    </Wrapper>
  )
}

export default Search

const query = graphql`
  query SEARCH_POSTS_QUERY {
    allContentfulPost(sort: { fields: date, order: DESC }) {
      nodes {
        ...PostBasicInfo
        ...Dates
        content {
          text: content
          md: childMarkdownRemark {
            text: rawMarkdownBody
            excerpt(pruneLength: 240)
          }
        }
        headerImage {
          description
          fluid(maxWidth: 400) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
