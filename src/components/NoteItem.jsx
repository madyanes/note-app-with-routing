import React from 'react'
import { Link } from 'react-router-dom'
import Detail from '../pages/Detail'

class NoteItem extends React.Component {
  render() {
    return (
      <>
        <p>
          <Link
            to={`/${this.props.note.id}`}
            element={<Detail />}
          >{this.props.note.title}</Link>
        </p>
        <p>{this.props.note.createdAt}</p>
        <p>{this.props.note.body}</p>
      </>
    )
  }
}

export default NoteItem
