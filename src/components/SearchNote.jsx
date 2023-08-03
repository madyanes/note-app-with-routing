import React from 'react'
import PropTypes from 'prop-types'

const SearchNote = ({ searchKeyword, searchKeywordChange }) => {
  return (
    <input
      type="text"
      placeholder='Search note...'
      value={searchKeyword}
      onChange={(e) => { searchKeywordChange(e.target.value) }}
    />
  )
}

SearchNote.propTypes = {
  searchKeyword: PropTypes.string.isRequired,
  searchKeywordChange: PropTypes.func.isRequired,
}

export default SearchNote
