import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import NoteDetail from '../components/NoteDetail'
import NotFound from './NotFound'

const DetailWrapper = ({ deleteNoteHandler, archiveNoteHandler, getNoteHandler }) => {
  const { id } = useParams()
  const note = getNoteHandler({ id })

  if (!note) {
    return <NotFound />
  }

  return <Detail deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} note={note} />
}

class Detail extends React.Component {
  render() {
    return (
      <NoteDetail
        note={this.props.note}
        deleteNoteHandler={this.props.deleteNoteHandler}
        archiveNoteHandler={this.props.archiveNoteHandler}
      />
    )
  }
}

DetailWrapper.propTypes = {
  getNoteHandler: PropTypes.func.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

Detail.propTypes = {
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  note: PropTypes.object.isRequired,
}

export default DetailWrapper
