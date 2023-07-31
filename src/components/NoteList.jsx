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
      </>
    )
  }
}

export default NoteList
