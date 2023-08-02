import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SlTrash, SlArrowDownCircle, SlPencil } from 'react-icons/sl'
import { showFormattedDate } from '../utils/local-data'

const NoteDetailWrapper = ({ note, deleteNoteHandler }) => {
  const navigate = useNavigate()
  return <NoteDetail note={note} deleteNoteHandler={deleteNoteHandler} navigate={navigate} />
}

class NoteDetail extends React.Component {
  constructor(props) {
    super(props)

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
  }

  onDeleteNoteHandler() {
    this.props.deleteNoteHandler({ id: this.props.note.id })
    this.props.navigate('/')
  }

  render() {
    return (
      <>
        <article className='note-detail'>
          <header>
            <h1>{this.props.note.title}</h1>
          </header>
          <footer>
            <p>{showFormattedDate(this.props.note.createdAt)}</p>
            <div className="options">
              <div onClick={this.onDeleteNoteHandler}>
                <SlTrash /> <span>Hapus</span>
              </div>
              <div><SlArrowDownCircle /> <span>Arsipkan</span></div>
              <div><SlPencil /> <span>Edit</span></div>
            </div>

          </footer>
          <p>{this.props.note.body}</p>
        </article>
      </>
    )
  }
}

export default NoteDetailWrapper
