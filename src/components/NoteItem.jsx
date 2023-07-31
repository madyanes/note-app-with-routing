import React from 'react'

class NoteItem extends React.Component {
  render() {
    return (
      <>
        <p>{this.props.note.title}</p>
        <p>{this.props.note.createdAt}</p>
        <p>{this.props.note.body}</p>
      </>
    )
  }
}

export default NoteItem
