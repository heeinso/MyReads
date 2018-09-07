import React from 'react';
import ShelfPresenter from './ShelfPresenter';

const ShelfContainer = props => {
	const { books, shelf, title } = props;

	return (
		<div className="bookshelf">
			<h1 className="bookshelf-title">{title}</h1>
			<div className="bookshelf-books">
				<ol className="books-grid">
					<ShelfPresenter books={books} shelf={shelf} />
				</ol>
			</div>
		</div>
	);
};

export default ShelfContainer;
