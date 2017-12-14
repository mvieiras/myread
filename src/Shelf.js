import React, {Component} from 'react'

class Shelf extends Component {
  static propTypes = {
    //contacts: PropTypes.array.isRequired,
    //onDeleteContact: PropTypes.func.isRequired
  }

  render() {
    const {books} = this.props

    // let current = books.reduce((output, book) => {
    //   if(book.shelf.length > 10) output[0].push(book)
    //   else if(book.shelf.length < 10) output[1].push(book)
    //   return output
    // }, [[], []])
    // console.log(current)

    let showCurrently
    showCurrently = books

    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <h2 className="bookshelf-title">Want to Read</h2>
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {showCurrently.map((book) => (
                <li key={book.id}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{
                              width: 128,
                              height: 193,
                              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}></div>
                            <div className="book-shelf-changer">
                                <select>
                                    <option value="none" disabled>Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf