import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import GatsbyImg from 'gatsby-image'

import { media } from '../../utils/style'
import { Time } from '../../utils/UI'

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
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h3 {
      margin-top: 0;
      margin-bottom: 2px;

      a:hover {
        text-decoration: none;
      }
    }

    time {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.gray};
      margin-bottom: 6px;
    }

    p {
      margin: 0;
      font-size: 1.8rem;

      ${media.mobile(css`
        font-size: 1.6rem;
      `)}
    }
  }

  .image {
    height: 180px;
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
  <Link
    className='image'
    to={"/" + slug}
  >
    <GatsbyImg
      style={{ height: '100%' }}
      fluid={headerImage.fluid}
      alt={headerImage.description}
      title={headerImage.description}
    />
  </Link>
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
      <div>
        <h3><Link to={"/" + post.slug}>{post.title}</Link></h3>
        <Time post={post}/>
      </div>
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
