import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { media } from '../../utils/style'

const Wrapper = styled.article`
  filter: grayscale(100%);
  display: flex;
  padding: 20px;

  ${({ highlighted }) => highlighted && css`
    filter: grayscale(0);
    background: ${({ theme }) => theme.lightGray};
  `};

  .text {
    flex: 5;

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

  .image {
    margin-right: 20px;
    flex: 1;

    ${media.custom(1200, css`
      flex: 2;
    `)}

    ${media.mobile(css`
      flex: 3;
    `)}

    ${media.phone(css`
      display: none;
    `)}
  }
`

const Image = ({ headerImage, slug }) => (
  <div className='image'>
    <Link to={"/" + slug}>
      <GatsbyImg
        style={{ height: '100%' }}
        fluid={headerImage.fluid}
        alt={headerImage.description}
        title={headerImage.description}
      />
    </Link>
  </div>
)

Image.propTypes = {
  headerImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired
}

const ListItem = ({ post, getItemProps, highlighted }) => (
  <Wrapper
    {...getItemProps({ item: post })}
    highlighted={highlighted}
  >
    <Image {...post} />
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
