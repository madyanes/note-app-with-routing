import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { SlTrash, SlArrowDownCircle, SlArrowUpCircle } from 'react-icons/sl'
import { showFormattedDate } from '../utils/local-data'

const NoteDetailWrapper = ({ note, deleteNoteHandler, archiveNoteHandler }) => {
  const navigate = useNavigate()
  return <NoteDetail note={note} deleteNoteHandler={deleteNoteHandler} navigate={navigate} archiveNoteHandler={archiveNoteHandler} />
}

class NoteDetail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      archived: this.props.note.archived,
    }

    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
  }

  onDeleteNoteHandler() {
    this.props.deleteNoteHandler({ id: this.props.note.id })
    this.props.navigate('/')
  }

  onArchiveStateChange() {
    this.setState((prevState) => !prevState.archived)
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
              <div onClick={() => { this.props.archiveNoteHandler(this.props.note) }}>
                {
                  !this.props.note.archived
                    ? <><SlArrowDownCircle /> <span>Arsipkan</span></>
                    : <><SlArrowUpCircle /> <span>Batal Arsip</span></>
                }
              </div>
            </div>

          </footer>
          <p>{this.props.note.body}</p>
        </article>
      </>
    )
  }
}

NoteDetailWrapper.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

NoteDetail.propTypes = {
  note: PropTypes.object.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default NoteDetailWrapper
