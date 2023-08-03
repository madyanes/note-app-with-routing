import React from 'react'
import { Link } from 'react-router-dom'
import { SlTrash, SlArrowDownCircle, SlPencil, SlArrowUpCircle } from 'react-icons/sl'
import PropTypes from 'prop-types'
import { showFormattedDate } from '../utils/local-data'

class NoteItem extends React.Component {
  render() {
    return (
      <>
        <article>
          <h1>
            <Link
              to={`/notes/${this.props.note.id}`}
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
            <div onClick={() => { this.props.archiveNoteHandler(this.props.note) }}>
              {
                !this.props.note.archived
                  ? <><SlArrowDownCircle /> <span>Arsipkan</span></>
                  : <><SlArrowUpCircle /> <span>Batal Arsip</span></>
              }
            </div>
            <div><SlPencil /> <span>Edit</span></div>
          </div>
        </article>
      </>
    )
  }
}

NoteItem.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

export default NoteItem
