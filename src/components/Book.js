import React from 'react';

import CoverImage from './CoverImage';
import Option from './Option';

const Book = props => {
	const { book, shelf } = props;

	const { title, authors, imageLinks } = book;

	const thumbnail = () =>
		imageLinks
			? imageLinks.thumbnail
			: `https://dummyimage.com/128x192/d3d3d3/fff.png&text=${encodeURIComponent(
					title.trim()
			  )}`;

	return (
		<li>
			<div className="book">
				<div className="book-top">
					<CoverImage thumbnail={thumbnail()} />
					<Option book={book} shelf={shelf} />
				</div>
				<div className="book-title">{title}</div>
				<div className="book-authors">
					{authors ? book.authors.join(', ') : 'AUTHOR NOT FOUND'}
				</div>
			</div>
		</li>
	);
};

export default Book;
