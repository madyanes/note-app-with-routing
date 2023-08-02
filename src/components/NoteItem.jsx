import React from 'react'
import { Link } from 'react-router-dom'
import { SlTrash, SlArrowDownCircle, SlPencil } from 'react-icons/sl'
import Detail from '../pages/Detail'
import { showFormattedDate } from '../utils/local-data'

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
            <p>{showFormattedDate(this.props.note.createdAt)}</p>
          </footer>
          <p>{this.props.note.body}</p>
          <div className="options">
            <div onClick={() => { this.props.deleteNoteHandler({ id: this.props.note.id }) }}>
              <SlTrash /> <span>Hapus</span>
            </div>
            <div><SlArrowDownCircle /> <span>Arsipkan</span></div>
            <div><SlPencil /> <span>Edit</span></div>
          </div>
        </article>
      </>
    )
  }
}

export default NoteItem
