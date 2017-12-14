import React, { Component } from 'react'
import './App.css'
import Search from './Search'
import ListShelves from './ListShelves'
import * as BooksAPI from './BooksAPI'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Search/>
        <ListShelves
          books={this.state.books}
        />
      </div>
    )
  }
}

export default BooksApp
