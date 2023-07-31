import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Detail from './pages/Detail'

class App extends React.Component {
  render() {
    return (
      <main>
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/:id" element={<Detail />} />
        </Routes>
      </main>
    )
  }
}

export default App
