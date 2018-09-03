import React, { Component } from 'react';
import Book from './Book';

class BookShelf extends Component {
  _renderBooks() {
    const { shelf, books } = this.props;

    return books
      .filter(book => book.shelf === shelf)
      .map(book => <Book key={book.id} book={book} shelf={shelf} />);
  }

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.heading}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">{this._renderBooks()}</ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
