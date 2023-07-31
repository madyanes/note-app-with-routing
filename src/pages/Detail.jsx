import React from 'react'
import { useParams } from 'react-router-dom'
import { getNote } from '../utils/local-data'
import NoteDetail from '../components/NoteDetail'

const DetailWrapper = () => {
  const { id } = useParams()

  return <Detail id={id} />
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
      <NoteDetail note={this.state.note} />
    )
  }
}

export default DetailWrapper
