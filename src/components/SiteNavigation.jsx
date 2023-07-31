import React from 'react'
import { Link } from 'react-router-dom'

class SiteNavigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Notes</Link>
          </li>
          <li>
            <a href="#">Archives</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default SiteNavigation
