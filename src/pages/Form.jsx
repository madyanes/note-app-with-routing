import React from 'react'
import { addNote } from '../utils/local-data'

class Form extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      body: '',
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this)
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this)
    this.onNoteSubmitEventHandler = this.onNoteSubmitEventHandler.bind(this)
  }

  onTitleChangeEventHandler(event) {
    this.setState({ title: event.target.value })
  }

  onBodyInputEventHandler(event) {
    this.setState({ body: event.target.innerHTML })
  }

  onNoteSubmitEventHandler(event) {
    event.preventDefault()
    this.props.onAddNote({
      title: this.state.title,
      body: this.state.body,
    })
  }

  render() {
    return (
      <>
        <article className='note-detail'>
          <header>
            <h1>Add Note</h1>
          </header>
          <form action="#" onSubmit={this.onNoteSubmitEventHandler}>
            <input type="text" placeholder='Title' value={this.state.title} onChange={this.onTitleChangeEventHandler} />
            <div className='editable' data-placeholder='Write something...' contentEditable onInput={this.onBodyInputEventHandler} />
            <button>Add new note</button>
          </form>
        </article>
      </>
    )
  }
}

export default Form