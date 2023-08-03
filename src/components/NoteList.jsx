import React from 'react'
import PropTypes from 'prop-types'
import NoteItem from './NoteItem'
import SearchNote from './SearchNote'

class NoteList extends React.Component {
  render() {
    return (
      <>
        <div className="search">
          <SearchNote
            searchKeyword={this.props.searchKeyword}
            searchKeywordChange={this.props.searchKeywordChange}
          />
        </div>
        <section>
          <h1>{this.props.headingText}</h1>
          {
            this.props.notes.length ?
              this.props.notes.map((note) => {
                return (
                  <NoteItem
                    key={note.id}
                    note={note}
                    deleteNoteHandler={this.props.deleteNoteHandler}
                    archiveNoteHandler={this.props.archiveNoteHandler}
                  />
                )
              }) :
              <p className='emptyMessage'>No {this.props.headingText}</p>
          }
        </section>
      </>
    )
  }
}

NoteList.propTypes = {
  headingText: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
}

export default NoteList
