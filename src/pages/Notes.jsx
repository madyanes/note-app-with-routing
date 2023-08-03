import React from 'react'
import { getArchivedNotes } from '../utils/local-data'
import NoteList from '../components/NoteList'

class Notes extends React.Component {
  render() {
    return (
      <NoteList
        headingText={this.props.archives ? 'Archived Notes' : 'Notes'}
        notes={this.props.notes}
        deleteNoteHandler={this.props.deleteNoteHandler}
        archiveNoteHandler={this.props.archiveNoteHandler}
      />
    )
  }
}

export default Notes
