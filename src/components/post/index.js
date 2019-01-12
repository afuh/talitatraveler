import React from 'react'
import PropTypes from 'prop-types'
import { DiscussionEmbed } from 'disqus-react'
import styled from 'styled-components'

import { Section, SocialLinks } from '../../utils/UI'

import Header from './header'
import RelatedPosts from './relatedPosts'
import Categories from './categories'

const PostWrapper = styled.div`
  white-space: pre-line;

  p {
    font-size: 1.6rem;
    line-height: 1.5;
  }
`

const Post = ({ post, relatedPosts }) => {
  const disqusProps = {
    shortname: process.env.GATSBY_DISQUSS,
    config: {
      identifier : post.id,
      title : post.title
    }
  }

  return (
    <article>
      <Header post={post} />
      <Section>
        {post.subTitle && <h2>{post.subTitle}</h2>}
        <PostWrapper
          dangerouslySetInnerHTML={{ __html: post.content.md.html }}
        />
        <Categories categories={post.categories}/>
        <SocialLinks post={post} />
        <RelatedPosts
          related={relatedPosts}
          post={post}
        />
        {process.env.NODE_ENV !== 'development' && <DiscussionEmbed {...disqusProps}/>}
      </Section>
    </article>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  relatedPosts: PropTypes.array.isRequired
}

export default Post
