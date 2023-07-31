import React from 'react'
import { Link } from 'react-router-dom'
import Detail from '../pages/Detail'

class NoteItem extends React.Component {
  render() {
    return (
      <>
        <article>
          <h1>
            <Link
              to={`/${this.props.note.id}`}
              element={<Detail />}
            >{this.props.note.title}</Link>
          </h1>
          <footer>
            <p>{this.props.note.createdAt}</p>
          </footer>
          <p>{this.props.note.body}</p>
        </article>
        <p>

        </p>

      </>
    )
  }
}

export default NoteItem
