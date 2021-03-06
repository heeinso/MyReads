import React from 'react';

const CoverImage = props => {
	const { thumbnail } = props;
	return (
		<div
			className="book-cover"
			style={{
				width: 128,
				height: 192,
				backgroundImage: `url(${thumbnail})`,
			}}
		/>
	);
};

export default CoverImage;
