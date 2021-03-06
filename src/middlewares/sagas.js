import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as api from '../utils/BooksAPI';

import {
	FETCH_ALL_BOOKS,
	FETCH_ALL_BOOKS_SUCCESS,
	CHANGE_SHELF,
	SEARCH_BOOKS,
	SEARCH_BOOKS_SUCCESS,
} from '../constants/actionType';

export function* fetchAllBooksHandler() {
	const books = yield call(api.getAll);
	yield put({
		type: FETCH_ALL_BOOKS_SUCCESS,
		books,
	});
}

export function* fetchAllBooks() {
	yield takeEvery(FETCH_ALL_BOOKS, fetchAllBooksHandler);
}

export function* changeShelfHandler(action) {
	yield call(api.update, action.payload.book, action.payload.shelf);
	yield put({
		type: FETCH_ALL_BOOKS,
	});
}

export function* changeShelf() {
	yield takeEvery(CHANGE_SHELF, changeShelfHandler);
}

export function* searchBooksHandler(action) {
	const books = yield call(api.search, action.payload, 10);
	yield put({
		type: SEARCH_BOOKS_SUCCESS,
		books,
	});
}

export function* searchBooks() {
	yield takeEvery(SEARCH_BOOKS, searchBooksHandler);
}

export default function* rootSaga() {
	yield all([fetchAllBooks(), changeShelf(), searchBooks()]);
}
