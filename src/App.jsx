import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { addNote, deleteNote, archiveNote, getArchivedNotes, getActiveNotes } from './utils/local-data'
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
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
    }

    this.addNoteHandler = this.addNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
  }

  addNoteHandler({ title, body }) {
    addNote({ title, body })
    this.setState({ activeNotes: getActiveNotes() })
  }

  deleteNoteHandler({ id }) {
    deleteNote(id)
    this.setState({ activeNotes: getActiveNotes() })
  }

  archiveNoteHandler({ id }) {
    archiveNote(id)
    this.setState({ archivedNotes: getArchivedNotes() })
    this.setState({ activeNotes: getActiveNotes() })
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
              <Route path="/:id" element={<Detail deleteNoteHandler={this.deleteNoteHandler} />} />
              <Route path="/new" element={<Form onAddNote={this.addNoteHandler} />} />
              <Route path="/archives" element={<Notes notes={this.state.archivedNotes} deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} archives />} />
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
