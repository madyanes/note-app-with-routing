import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { addNote, getAllNotes, deleteNote } from './utils/local-data'
import Notes from './pages/Notes'
import Detail from './pages/Detail'
import Form from './pages/Form'
import SiteHeader from './components/SiteHeader'
import SiteNavigation from './components/SiteNavigation'
import SiteFooter from './components/SiteFooter'

import './styles/app.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      notes: getAllNotes()
    }

    this.addNoteHandler = this.addNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
  }

  addNoteHandler({ title, body }) {
    addNote({ title, body })
    this.setState({ notes: getAllNotes() })
  }

  deleteNoteHandler({ id }) {
    console.log('deleted')
    deleteNote(id)
    this.setState({ notes: getAllNotes() })
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <SiteHeader />
          <SiteNavigation />
        </header>
        <div className="container-base-box">
          <main>
            <Routes>
              <Route path="/" element={<Notes notes={this.state.notes} deleteNoteHandler={this.deleteNoteHandler} />} />
              <Route path="/:id" element={<Detail />} />
              <Route path="/new" element={<Form onAddNote={this.addNoteHandler} />} />
            </Routes>
          </main>
          <footer>
            <SiteFooter />
          </footer>
        </div>
      </React.Fragment>
    )
  }
}

export default App
