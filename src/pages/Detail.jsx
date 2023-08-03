import React from 'react'
import { useParams } from 'react-router-dom'
import NoteDetail from '../components/NoteDetail'

const DetailWrapper = ({ deleteNoteHandler, archiveNoteHandler, getNoteHandler }) => {
  const { id } = useParams()

  return <Detail deleteNoteHandler={deleteNoteHandler} archiveNoteHandler={archiveNoteHandler} note={getNoteHandler({ id })} />
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

export default DetailWrapper
