import React, { Component } from 'react'
import './App.css'
import Search from './Search'
import ListShelves from './ListShelves'

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Search/>
        <ListShelves/>
      </div>
    )
  }
}

export default BooksApp
