import React from 'react'
import PropTypes from 'prop-types'

const Select = (props) => {
  return (
    <select value={props.currentValue} onChange={(e) => props.onChange(e)}>
      <option value="none" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  )
};

Select.propTypes = {
  currentValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select