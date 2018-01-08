import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {update} from './BooksAPI'
import Select from './Select'

class BooksList extends Component {
  handleOnChange = (selectEvent) => {
    const {updateBooks} = this.props;
    const shelf = selectEvent.target.value;
    update(this.props, shelf).then((res) => {
      if (updateBooks) {
        updateBooks(this.props.id)
      }
    });
  };

  render() {
    const {authors, title, imageLinks, shelf} = this.props;
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks && imageLinks.smallThumbnail})`}}></div>
            <div className="book-shelf-changer">
              <Select
                onChange={this.handleOnChange}
                currentValue={shelf ? shelf : "none"}
              />
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">
            {authors && authors.map((author) => author)}
          </div>
        </div>
      </li>
    )
  }
}

BooksList.propTypes = {
  authors: PropTypes.array,
  imageLinks: PropTypes.object,
  shelf: PropTypes.string,
  title: PropTypes.string,
};

BooksList.defaultProps = {
  authors: [],
  imageLinks: {},
  shelf: "",
  title: "",
};

export default BooksList