import React from 'react'
import { useParams } from 'react-router-dom'
import NoteDetail from '../components/NoteDetail'

const DetailWrapper = () => {
  const { id } = useParams()
  console.log(id)

  return <Detail id={id} />
}

class Detail extends React.Component {
  render() {
    return (
      <NoteDetail noteId={this.props.id} />
    )
  }
}

export default DetailWrapper
