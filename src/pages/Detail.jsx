import React from 'react'
import { useParams } from 'react-router-dom'
import NoteItem from '../components/NoteItem'

const DetailWrapper = () => {
  const { id } = useParams()

  return <Detail id={id} />
}

class Detail extends React.Component {
  render() {
    return (
      <NoteItem noteId={this.props.id} />
    )
  }
}

export default DetailWrapper
