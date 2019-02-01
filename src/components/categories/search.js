import React, { Component } from 'react'
import { StaticQuery, graphql, navigate } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Downshift from 'downshift'
import computeScrollIntoView from 'compute-scroll-into-view'

import { searchWord } from '../../utils/helpers'
import ListItem from './listItem'

const InputWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  flex: 1;

  border: none;
  background: #f6f6f6;

  display: block;
  padding: 2rem;
  transition: .2s border-color;

  &:focus {
    outline: 0;
  }
`

class SearchForm extends Component {
  state = {
    filteredPosts: []
  }

  handleChange = e => {
    const filteredPosts = this.handleFilter(e.target.value)
    this.setState({ filteredPosts })
  }

  handleFilter(search){
    const { posts } = this.props

    return posts.reduce((acc, post) => {
      if (searchWord(search, post)) {
        acc.push(post)
      }
      return acc
    }, [])
  }

  render(){
    const { filteredPosts } = this.state

    return (
      <Downshift
        itemToString={post => (post === null ? '' : post.title)}
        onChange={({ slug }) => navigate(slug)}
        scrollIntoView={node => {
          if (!node) return

          const [ action ] = computeScrollIntoView(node, {
            scrollMode: 'if-needed',
            block: 'nearest',
            inline: 'nearest'
          })
          if (!action) return

          action.el.scrollTop = action.top
          action.el.scrollLeft = action.left
        }}
      >
        {({ getInputProps, getItemProps, highlightedIndex, getMenuProps, isOpen }) => (
          <div>
            <InputWrapper>
              <Input
                {...getInputProps({
                  type: 'text',
                  placeholder: 'Buscar...',
                  id: 'search',
                  onChange: e => {
                    e.persist()
                    this.handleChange(e)
                  }
                })}
                name="search"
                placeholder='Buscar...'
              />
            </InputWrapper>
            <div {...getMenuProps()}>
              {isOpen && filteredPosts.map((post, index) => (
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
    )
  }
}

SearchForm.propTypes = {
  posts: PropTypes.array.isRequired
}

const Search = () => (
  <StaticQuery
    query={query}
    render={({ posts: { edges } }) => (
      <SearchForm
        posts={edges.map(({ node }) => node)}
      />
    )}
  />
)

export default Search

const query = graphql`
  {
    posts: allContentfulPost(sort: { fields: date, order: DESC  }) {
      edges {
        node {
          title
          subTitle
          slug
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
          ...Dates
        }
      }
    }
  }
`
