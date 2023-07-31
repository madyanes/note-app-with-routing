import React from 'react'

class NoteItem extends React.Component {
  render() {
    return (
      <p>ID: {this.props.noteId}</p>
    )
  }
}

export default NoteItem
