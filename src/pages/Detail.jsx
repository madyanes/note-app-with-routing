import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail'

const DetailWrapper = ({ deleteNoteHandler }) => {
  const { id } = useParams()

  return <Detail id={id} deleteNoteHandler={deleteNoteHandler} />
}

class Detail extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      note: getNote(this.props.id),
    }
  }

  render() {
    return (
      <NoteDetail
        note={this.state.note}
        deleteNoteHandler={this.props.deleteNoteHandler}
      />
    )
  }
}

export default DetailWrapper
