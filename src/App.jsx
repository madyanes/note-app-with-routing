import React from 'react'
import { Routes, Route, useSearchParams, useNavigate } from 'react-router-dom'
import { addNote, deleteNote, archiveNote, getArchivedNotes, getActiveNotes, unarchiveNote, getNote } from './utils/local-data'
import Notes from './pages/Notes'
import Detail from './pages/Detail'
import Form from './pages/Form'
import NotFound from './pages/NotFound'
import SiteHeader from './components/SiteHeader'
import SiteNavigation from './components/SiteNavigation'
import SiteFooter from './components/SiteFooter'

import './styles/app.css'

const AppWrapper = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const searchKeyword = searchParams.get('search')

  const changeSearchParams = (searchKeyword) => {
    setSearchParams({ search: searchKeyword })
  }

  return (
    <App
      defaultSearchKeyword={searchKeyword}
      searchKeywordChange={changeSearchParams}
      navigate={navigate}
    />
  )
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activeNotes: getActiveNotes(),
      archivedNotes: getArchivedNotes(),
      searchKeyword: props.defaultSearchKeyword || '',
    }

    this.addNoteHandler = this.addNoteHandler.bind(this)
    this.deleteNoteHandler = this.deleteNoteHandler.bind(this)
    this.archiveNoteHandler = this.archiveNoteHandler.bind(this)
    this.getNoteHandler = this.getNoteHandler.bind(this)
    this.searchKeywordChangeHandler = this.searchKeywordChangeHandler.bind(this)
  }

  searchKeywordChangeHandler(searchKeyword) {
    this.setState(() => {
      return {
        searchKeyword,
      }
    })

    this.props.searchKeywordChange(searchKeyword)
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
    const searchedActiveNotes = this.state.activeNotes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    })

    const searchedArchivedNotes = this.state.archivedNotes.filter((note) => {
      return note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    })

    return (
      <React.Fragment>
        <header>
          <SiteHeader />
          <SiteNavigation
            searchKeyword={this.state.searchKeyword}
            searchKeywordChange={this.searchKeywordChangeHandler}
          />
        </header>
        <div className="container-base-box">
          <main>
            <Routes>
              <Route path="/" element={<Notes notes={this.state.searchKeyword ? searchedActiveNotes : this.state.activeNotes} deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} searchKeyword={this.state.searchKeyword} searchKeywordChange={this.searchKeywordChangeHandler} />} />
              <Route path="/notes/:id" element={<Detail deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} getNoteHandler={this.getNoteHandler} />} />
              <Route path="/new" element={<Form onAddNote={this.addNoteHandler} />} />
              <Route path="/archives" element={<Notes notes={this.state.searchKeyword ? searchedArchivedNotes : this.state.archivedNotes} deleteNoteHandler={this.deleteNoteHandler} archiveNoteHandler={this.archiveNoteHandler} searchKeyword={this.state.searchKeyword} searchKeywordChange={this.searchKeywordChangeHandler} archives />} />
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

export default AppWrapper
