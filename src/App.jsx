import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { addNote, deleteNote, archiveNote, getArchivedNotes, getActiveNotes, unarchiveNote, getNote } from './utils/local-data'
import Notes from './pages/Notes'
import Detail from './pages/Detail'
import Form from './pages/Form'
import NotFound from './pages/NotFound'
import SiteHeader from './components/SiteHeader'
import SiteNavigation from './components/SiteNavigation'
import SiteFooter from './components/SiteFooter'

import './styles/app.css'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    }

    this.addNoteHandler = this.addNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
    this.getNoteHandler = this.getNoteHandler.bind(this)
  }

  addNoteHandler({ title, body }) {
    addNote({ title, body })
    this.setState({ activeNotes: getActiveNotes() })
  }

  deleteNoteHandler({ id }) {
    deleteNote(id)
    this.setState({ archivedNotes: getArchivedNotes() })
    this.setState({ activeNotes: getActiveNotes() })
  }

  archiveNoteHandler(note) {
    !note.archived ? archiveNote(note.id) : unarchiveNote(note.id)

    this.setState({ archivedNotes: getArchivedNotes() })
    this.setState({ activeNotes: getActiveNotes() })
  }

  getNoteHandler({ id }) {
    return getNote(id) || null
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
              <Route path="/" element={<Notes notes={this.state.activeNotes} deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} />} />
              <Route path="/notes/:id" element={<Detail deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} getNoteHandler={this.getNoteHandler} />} />
              <Route path="/new" element={<Form onAddNote={this.addNoteHandler} />} />
              <Route path="/archives" element={<Notes notes={this.state.archivedNotes} deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} archives />} />
              <Route path="*" element={<NotFound />} />
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
