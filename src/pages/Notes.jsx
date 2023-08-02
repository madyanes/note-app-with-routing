import React from 'react'
import NoteList from '../components/NoteList'

class Notes extends React.Component {
  render() {
    return (
      <NoteList
        headingText='Notes'
        notes={this.props.notes}
        deleteNoteHandler={this.props.deleteNoteHandler}
      />
    )
  }
}

export default Notes
