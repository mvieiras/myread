import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Debounce} from 'react-throttle'
import {search, getAll} from './BooksAPI'
import BooksList from './BooksList'

const mapBookShelf = (mainBooks, searchBooks) =>
  searchBooks.map((searchBook) => {
    const foundMainBook = mainBooks.filter((mainBook) => mainBook.id === searchBook.id);

    return {
      ...searchBook,
      shelf: foundMainBook.length ? foundMainBook[0].shelf : "none"
    }
  });

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      error: false,
      errorMsg: null
    }
  }

  handleOnChange = (e) => {
    const searchQuery = e.target.value;
    if (searchQuery === "") {
      return false;
    }

    search(searchQuery, 20).then((searchBooks) => {
      if (searchBooks.error) {
        this.setState({
          error: true,
          errorMsg: searchBooks.error
        });

        return false;
      }

      getAll().then((mainBooks) => {
        this.setState({
          books: mapBookShelf(mainBooks, searchBooks),
          error: false
        });
      });
    });
  };

  updateBooksSelection = (id) => {
    this.setState((state) => ({
      ...state,
      books: state.books.filter((book) => book.id !== id),
    }))
  };

  render() {
    const {books, error, errorMsg} = this.state;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                name="searchQuery"
                onChange={(e) => this.handleOnChange(e)}
                type="text"
                placeholder="Search by title or author"
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">

          {!error && books.length === 0 && (
            <p>Enter something in above search box and press enter to search for your favorite books</p>
          )}

          {error && (
            <p>{errorMsg}</p>
          )}

          {!error && books.length > 0 && (
            <ol className="books-grid">
              {books.map((book) => (
                <BooksList
                  key={book.id}
                  {...book}
                  updateBooks={this.updateBooksSelection}
                />
              ))}
            </ol>
          )}
        </div>
      </div>
    )
  }
}

export default Search