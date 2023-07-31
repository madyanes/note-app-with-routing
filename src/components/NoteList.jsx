import React from 'react'
import { getAllNotes } from '../utils/local-data'

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
              <p key={note.id}>{note.id}</p>
            )
          })
        }
      </>
    )
  }
}

export default NoteList
