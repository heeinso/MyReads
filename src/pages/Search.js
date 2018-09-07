import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchBooks, clearSearchResult } from '../actions';
import SearchInput from '../components/SearchInput';
import SearchResult from '../components/SearchResult';

class Search extends Component {
	componentWillUnmount() {
		this.props.clearSearchResult();
	}

	handleSearch = query => {
		if (query.trim() === '') {
			this.props.clearSearchResult();
		} else {
			this.props.searchBooks(query);
		}
	};

	render() {
		return (
			<div className="search-books">
				<SearchInput handleSearch={this.handleSearch} />
				<SearchResult />
			</div>
		);
	}
}

export default connect(
	null,
	{ searchBooks, clearSearchResult }
)(Search);
