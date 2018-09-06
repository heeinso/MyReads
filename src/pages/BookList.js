import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import BookShelf from '../components/BookShelf';
import {
	CURRENTLY_READING,
	WANT_TO_READ,
	READ_DONE,
} from '../constants/shelfType';
import { fetchAllBooks } from '../actions';

class BookList extends Component {
	componentDidMount() {
		this.props.fetchAllBooks();
	}

	render() {
		const { books } = this.props;
		return (
			<div className="book-list">
				<div className="book-list-title">
					<h1>My Reads</h1>
				</div>
				<div className="book-list-content">
					<BookShelf
						shelf={CURRENTLY_READING}
						books={books}
						heading="Currently Reading"
					/>
					<BookShelf
						shelf={WANT_TO_READ}
						books={books}
						heading="Want To Read"
					/>
					<BookShelf
						shelf={READ_DONE}
						books={books}
						heading="Read Done"
					/>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { books: state.books };
};

export default connect(
	mapStateToProps,
	{ fetchAllBooks }
)(BookList);
