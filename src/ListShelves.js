import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import BooksList from './BooksList'

class ListShelves extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.currentlyReading.map(book=>
                    <BooksList
                      key={book.id}
                      {...book}
                      updateBooks={this.updateBooksSelection}
                    />
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.wantToRead.map(book=>
                    <BooksList
                      key={book.id}
                      {...book}
                      updateBooks={this.updateBooksSelection}
                    />
                  )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.read.map(book=>
                    <BooksList
                      key={book.id}
                      {...book}
                      updateBooks={this.updateBooksSelection}
                    />
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search" >Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListShelves