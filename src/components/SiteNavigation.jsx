import React from 'react'
import { Link } from 'react-router-dom'
import { PiNotePencil } from 'react-icons/pi'

class SiteNavigation extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Notes</Link>
            </li>
            <li>
              <Link to="/archives">Archives</Link>
            </li>
          </ul>
        </nav>
        <div className="new-note-button-container">
          <Link to="/new" className='new-note-button'>
            <PiNotePencil /> &nbsp;Add Note
          </Link>
        </div>
      </>
    )
  }
}

export default SiteNavigation
