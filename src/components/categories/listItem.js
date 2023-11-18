import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'

import { Time, PostImage as _PostImage } from '../../utils/UI'

const PostImage = styled(_PostImage)`
  height: 100%;
`

const Wrapper = styled.article`
  ${({ theme, highlighted }) => css`
    filter: grayscale(100%);
    display: flex;
    padding: 20px;
    cursor: pointer;

    ${highlighted &&
    css`
      filter: grayscale(0);
      background: ${theme.lightGray};
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
        color: ${theme.gray};
        margin-bottom: 6px;
      }

      p {
        margin: 0;
        font-size: 1.8rem;

        ${theme.media.mobile(css`
          font-size: 1.6rem;
        `)}
      }
    }

    .image {
      height: 180px;
      margin-right: 20px;
      flex: 1;

      ${theme.media.custom(
        1200,
        css`
          flex: 2;
        `,
      )}

      ${theme.media.mobile(css`
        flex: 3;
      `)}

      ${theme.media.phone(css`
        display: none;
      `)}
    }
  `}
`

const Image = ({ headerImage, slug }) => (
  <Link className="image" to={'/' + slug}>
    <PostImage placeholderHeight="100%" image={headerImage} />
  </Link>
)

Image.propTypes = {
  headerImage: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
}

const ListItem = ({ post, getItemProps, highlighted }) => (
  <Wrapper {...getItemProps({ item: post })} highlighted={highlighted}>
    <Image {...post} />
    <div className="text">
      <div>
        <h3>
          <Link to={'/' + post.slug}>{post.title}</Link>
        </h3>
        <Time date={post.date} formattedDate={post.formattedDate} />
      </div>
      <p>{post.content.md.excerpt}</p>
    </div>
  </Wrapper>
)

ListItem.propTypes = {
  post: PropTypes.object.isRequired,
  getItemProps: PropTypes.func.isRequired,
  highlighted: PropTypes.bool.isRequired,
}

export default ListItem
