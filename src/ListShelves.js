import React from 'react'
import BooksList from './BooksList'

const ListShelves = (props) => {
  const {shelfTitle, books, updateShelf} = props;
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) =>
              <BooksList
                key={book.id}
                {...book}
                updateShelf={updateShelf}
              />
            )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ListShelves