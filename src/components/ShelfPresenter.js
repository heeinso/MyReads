import React from 'react';
import Book from './Book';

const ShelfPresenter = ({ books, shelf }) => {
	return books
		.filter(book => book.shelf === shelf)
		.map(book => <Book key={book.id} book={book} />);
};

export default ShelfPresenter;
