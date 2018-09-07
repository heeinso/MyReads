import React from 'react';

const PageNotFound = () => {
	return (
		<div>
			<h1 className="book-list-title" style={{ color: 'white' }}>
				404
			</h1>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: '28px',
					fontWeight: 'bold',
				}}>
				Page Not Found
			</div>
		</div>
	);
};

export default PageNotFound;
