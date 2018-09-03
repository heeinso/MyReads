import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  CURRENTLY_READING,
  WANT_TO_READ,
  READ_DONE,
  NONE,
} from '../constants/shelfType';
import { changeBookShelf } from '../actions';

class BookShelfChanger extends Component {
  handleChange = e => {
    this.props.changeBookShelf(this.props.book, e.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select defaultValue={this.props.shelf} onChange={this.handleChange}>
          <option value={NONE} disabled>
            Move to...
          </option>
          <option value={CURRENTLY_READING}>Currently Reading</option>
          <option value={WANT_TO_READ}>Want to Read</option>
          <option value={READ_DONE}>Read</option>
          <option value={NONE}>None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
