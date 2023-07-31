import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <>
        <article className='note-detail'>
          <header>
            <h1>Add Note</h1>
          </header>
          <form action="#">
            <input type="text" placeholder='Title' />
            <div className='editable' data-placeholder='Write something...' contentEditable />
            <button>Add new note</button>
          </form>
        </article>
      </>
    )
  }
}

export default Form
