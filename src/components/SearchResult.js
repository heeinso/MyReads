import React, { Component } from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { NONE } from '../constants/shelfType';
import { fetchAllBooks } from '../actions/index';

class SearchResult extends Component {
	componentDidMount() {
		this.props.fetchAllBooks();
	}

	render() {
		const { books, searchedBooks } = this.props;
		return (
			<div className="search-books-results">
				<ol className="books-grid">
					{searchedBooks.map(searchedBook => {
						let result = books.find(
							book => book.id === searchedBook.id
						);
						return (
							<Book
								key={searchedBook.id}
								book={searchedBook}
								shelf={result ? result.shelf : NONE}
							/>
						);
					})}
				</ol>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		books: state.books,
		searchedBooks: state.searchedBooks,
	};
};

export default connect(
	mapStateToProps,
	{ fetchAllBooks }
)(SearchResult);
