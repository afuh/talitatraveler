import React from 'react'
import PropTypes from 'prop-types'

export const Time = ({ post, style }) => (
  <time dateTime={(post.date || post.createdAt).replace(/\//g, "-")}>
    <span style={{ ...style }}>{post.date || post.createdAt}</span>
  </time>
)

Time.propTypes = {
  post: PropTypes.object.isRequired,
  style: PropTypes.object
}
