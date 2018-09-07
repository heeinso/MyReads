import {
	FETCH_ALL_BOOKS,
	CHANGE_SHELF,
	SEARCH_BOOKS,
	CLEAR_SEARCH_RESULT,
} from '../constants/actionType';

export const fetchAllBooks = () => {
	return {
		type: FETCH_ALL_BOOKS,
	};
};

export const changeShelf = (book, shelf) => {
	return {
		type: CHANGE_SHELF,
		payload: {
			book,
			shelf,
		},
	};
};

export const searchBooks = query => {
	return {
		type: SEARCH_BOOKS,
		payload: query,
	};
};

export const clearSearchResult = () => {
	return {
		type: CLEAR_SEARCH_RESULT,
	};
};
