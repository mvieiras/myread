import React, {Component} from 'react'
import Shelf from './Shelf'
import { Route, Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class ListShelves extends Component {
  static propTypes = {
    //contacts: PropTypes.array.isRequired,
    //onDeleteContact: PropTypes.func.isRequired
  }

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
      <Route exact path='/' render={() => (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <Shelf books={this.state.books}/>

          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
      )}/>
    )
  }
}

export default ListShelves