import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

const Wrapper = styled.div`
  filter: grayscale(100%);

  ${({ highlighted }) => highlighted && css`
    filter: grayscale(0);
    background: #f6f6f6;
  `};

  display: flex;
  padding: 20px;

  .text {
    flex: 1;

    h3 {
      margin-top: 0;
      margin-bottom: 2px;
    }

    p {
      margin: 0;
      font-size: 1.5rem;
    }

    time p {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.gray};
      margin-bottom: 6px;
    }
  }
`

const ListItem = ({ post, getItemProps, highlighted }) => (
  <Wrapper
    {...getItemProps({ item: post })}
    highlighted={highlighted}
  >
    <div style={{ marginRight: 20, flexBasis: '14%' }}>
      <Link to={"/" + post.slug}>
        <GatsbyImg
          style={{ height: 120 }}
          fluid={post.headerImage.fluid}
          alt={post.headerImage.description}
          title={post.headerImage.description}
        />
      </Link>
    </div>
    <div className='text'>
      <h3><Link to={"/" + post.slug}>{post.title}</Link></h3>
      <time dateTime={(post.date || post.createdAt).replace(/\//g, "-")}>
        <p>{post.date || post.createdAt}</p>
      </time>
      <p>{post.content.md.excerpt}</p>
    </div>
  </Wrapper>
)


ListItem.propTypes = {
  post: PropTypes.object.isRequired,
  getItemProps: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired
}

export default ListItem
