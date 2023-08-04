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

const NoteItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

NoteList.propTypes = {
  headingText: PropTypes.string.isRequired,
  notes: PropTypes.arrayOf(PropTypes.shape(NoteItemPropTypes)).isRequired,
  deleteNoteHandler: PropTypes.func.isRequired,
  archiveNoteHandler: PropTypes.func.isRequired,
  searchKeyword: PropTypes.string.isRequired,
  searchKeywordChange: PropTypes.func.isRequired,
}

export default NoteList
