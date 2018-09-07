import { combineReducers } from 'redux';
import {
	FETCH_ALL_BOOKS_SUCCESS,
	SEARCH_BOOKS_SUCCESS,
	CLEAR_SEARCH_RESULT,
	CHANGE_SHELF,
} from '../constants/actionType';

const bookReducer = (state = [], action) => {
	switch (action.type) {
		case CHANGE_SHELF:
			const targetIndex = state.indexOf(action.payload.book);
			const existingBooks = [
				...state.slice(0, targetIndex),
				...state.slice(targetIndex + 1),
			];
			const targetBook = state[targetIndex];
			targetBook.shelf = action.payload.shelf;
			existingBooks.push(targetBook);
			return [...existingBooks];
		case FETCH_ALL_BOOKS_SUCCESS:
			return [...action.books];
		default:
			return state;
	}
};

const searchReducer = (state = [], action) => {
	switch (action.type) {
		case SEARCH_BOOKS_SUCCESS:
			return action.books.length > 0 ? [...action.books] : null;
		case CLEAR_SEARCH_RESULT:
			return [];
		default:
			return state;
	}
};

export default combineReducers({
	books: bookReducer,
	searchedBooks: searchReducer,
});
