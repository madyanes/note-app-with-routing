import React from 'react'
import { showFormattedDate } from '../utils/local-data'

class NoteDetail extends React.Component {
  render() {
    return (
      <>
        <article className='note-detail'>
          <header>
            <h1>{this.props.note.title}</h1>
          </header>
          <footer>
            <p>{showFormattedDate(this.props.note.createdAt)}</p>
          </footer>
          <p>{this.props.note.body}</p>
        </article>
      </>
    )
  }
}

export default NoteDetail
