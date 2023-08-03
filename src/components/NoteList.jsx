import React from 'react'
import NoteItem from './NoteItem'

class NoteList extends React.Component {
  render() {
    return (
      <>
        <section>
          <h1>{this.props.headingText}</h1>
          {
            this.props.notes.length ?
              this.props.notes.map((note) => {
                return (
                  <NoteItem
                    key={note.id}
                    note={note}
                    deleteNoteHandler={this.props.deleteNoteHandler}
                    archiveNoteHandler={this.props.archiveNoteHandler}
                  />
                )
              }) :
              <p className='emptyMessage'>No {this.props.headingText}</p>
          }
        </section>
      </>
    )
  }
}

export default NoteList
