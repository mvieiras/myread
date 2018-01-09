import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Search from './Search'
import ListShelves from './ListShelves'
import { Route, Link } from 'react-router-dom'

const bookShelves = [
  {title: "Currently Reading", key: "currentlyReading"},
  {title: "Want To Read", key: "wantToRead"},
  {title: "Read", key: "read"},
];

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
      books: []
    }
  }

  componentDidMount(){
    this.listBookShelf()
  }

  updateShelf = () => {
    this.listBookShelf()
  }

  listBookShelf(){
    BooksAPI.getAll().then((books) => {
      this.setState({
        books
      })
    })
  }

  render() {
    const {books} = this.state;

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads | Mário Vieira</h1>
        </div>

        <div className="list-books-content">
          {bookShelves.map((bookShelf) => (
            <ListShelves
              key={bookShelf.key}
              shelfTitle={bookShelf.title}
              books={books.filter((book) => book.shelf === bookShelf.key)}
              updateShelf={this.updateShelf}
            />
          ))}
        </div>

        <div className="open-search">
          <Link className="btn" to="/search" >Add a book</Link>
        </div>

        <Route path="/search" render={({ history }) => (
          <Search books={this.state.books} onUpdateShelf={this.updateShelf} />
        )}/>
      </div>
    )
  }
}

export default Home
