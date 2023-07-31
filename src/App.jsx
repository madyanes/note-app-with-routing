import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { getAllNotes } from './utils/local-data'
import Notes from './pages/Notes'
import Detail from './pages/Detail'
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
              <Route path="/" element={<Notes notes={this.state.notes} />} />
              <Route path="/:id" element={<Detail />} />
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
