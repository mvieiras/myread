import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListShelves from './ListShelves'
import { Route } from 'react-router-dom'

class BooksApp extends Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount(){
    this.listBookShelf()
  }

  listBookShelf(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books:books,
        currentlyReading: books.filter((book) => book.shelf==='currentlyReading'),
        wantToRead: books.filter((book) => book.shelf==='wantToRead'),
        read: books.filter((book) => book.shelf==='read')
      })
    })
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((books) => {
      this.listBookShelf()
    })
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListShelves currentlyReading={this.state.currentlyReading}
                     wantToRead={this.state.wantToRead}
                     read={this.state.read}
                     onUpdateShelf={this.updateShelf}
          />
        )}/>

        <Route path="/search" render={({ history }) => (
          <Search books={this.state.books} onUpdateShelf={this.updateShelf} />
        )}/>
      </div>

    )
  }
}

export default BooksApp
