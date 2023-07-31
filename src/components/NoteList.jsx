import React from 'react'
import { getAllNotes } from '../utils/local-data'
import NoteItem from './NoteItem'

class NoteList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }
  }

  render() {
    return (
      <>
        <section>
          <h1>{this.props.headingText}</h1>
          {
            this.state.notes.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  note={note}
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
