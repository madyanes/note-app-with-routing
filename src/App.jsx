import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Detail from './pages/Detail'
import SiteHeader from './components/SiteHeader'
import SiteNavigation from './components/SiteNavigation'

import './styles/app.css'

class App extends React.Component {
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
              <Route path="/" element={<Notes />} />
              <Route path="/:id" element={<Detail />} />
            </Routes>
          </main>
        </div>
      </React.Fragment>
    )
  }
}

export default App
