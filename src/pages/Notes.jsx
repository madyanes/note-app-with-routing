import React from 'react'
import PropTypes from 'prop-types'
import NoteList from '../components/NoteList'

class Notes extends React.Component {
  render() {
    return (
      <NoteList
        headingText={this.props.archives ? 'Archived Notes' : 'Notes'}
        notes={this.props.notes}
        deleteNoteHandler={this.props.deleteNoteHandler}
        archiveNoteHandler={this.props.archiveNoteHandler}
        searchKeyword={this.props.searchKeyword}
        searchKeywordChange={this.props.searchKeywordChange}
      />
    )
  }
}

Notes.propTypes = {
  archives: PropTypes.bool,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

export default Notes
