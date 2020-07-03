import React from 'react'
import PropTypes from 'prop-types'

export const Time = ({ style, formattedDate, date }) => (
  <time dateTime={date}>
    <span style={{ ...style }}>{formattedDate}</span>
  </time>
)

Time.propTypes = {
  style: PropTypes.object,
  formattedDate: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}
