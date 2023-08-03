import React from 'react'
import NoteItem from './NoteItem'

class NoteList extends React.Component {
  render() {
    return (
      <>
        <section>
          <h1>{this.props.headingText}</h1>
          {
            this.props.notes.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
                  deleteNoteHandler={this.props.deleteNoteHandler}
                  archiveNoteHandler={this.props.archiveNoteHandler}
                />
              )
            })
          }
        </section>
      </>
    )
  }
}

export default NoteList
