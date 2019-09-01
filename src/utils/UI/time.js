import React from 'react'
import PropTypes from 'prop-types'

export const Time = ({ post, style }) => (
  <time dateTime={(post.date || post.createdAt)}>
    <span style={{ ...style }}>
      {post.formatedDate || post.formatedCreatedAt}
    </span>
  </time>
)

Time.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object
}
