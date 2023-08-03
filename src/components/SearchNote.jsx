import React from 'react'

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

export default SearchNote
