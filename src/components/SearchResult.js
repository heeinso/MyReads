import React from 'react';
import { connect } from 'react-redux';

import Book from './Book';
import { fetchAllBooks } from '../actions/index';
import { NONE } from '../constants/shelfType';

const SearchResult = props => {
	const { books, searchedBooks } = props;

	return (
		<div className="search-books-results">
			<ol className="books-grid">
				{!!searchedBooks ? (
					searchedBooks.map(searchedBook => {
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
					})
				) : (
					<div className="books-not-found">
						Sorry. No Book Found ... ((´д｀))
					</div>
				)}
			</ol>
		</div>
	);
};

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
