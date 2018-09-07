import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';
import debounce from 'lodash/debounce';

import { keywords } from '../utils/keywords';

/* Refer to https://github.com/moroshko/react-autosuggest/blob/master/README.md */

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: keywords.filter(
				keyword =>
					keyword.name.toLowerCase().slice(0, inputLength) ===
					inputValue
		  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
	<div key={suggestion.name}>{suggestion.name}</div>
);

class SearchInput extends Component {
	constructor(props) {
		super(props);

		// Autosuggest is a controlled component.
		// This means that you need to provide an input value
		// and an onChange handler that updates this value (see below).
		// Suggestions also need to be provided to the Autosuggest,
		// and they are initially empty because the Autosuggest is closed.
		this.state = {
			value: '',
			suggestions: [],
		};

		// Apply lodash debounce for better User Experience
		this.changed = debounce(this.props.handleSearch, 200, {
			maxWait: 300,
		});
	}

	onChange = (event, { newValue }) => {
		this.setState({ value: newValue }, () => {
			this.changed(newValue);
		});
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value),
		});
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: [],
		});
	};

	render() {
		const { value, suggestions } = this.state;

		// Autosuggest will pass through all these props to the input.
		const inputProps = {
			placeholder: 'Find books by title or author!',
			value,
			onChange: this.onChange,
		};

		return (
			<div className="search-books-bar">
				<Link to="/" className="close-search">
					Close
				</Link>
				<div className="search-books-input-wrapper">
					<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={
							this.onSuggestionsFetchRequested
						}
						onSuggestionsClearRequested={
							this.onSuggestionsClearRequested
						}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						inputProps={inputProps}
					/>
					<button className="search_btn">
						<i
							className="fa fa-search"
							style={{
								color: '#000',
								fontSize: '20px',
								marginBottom: '20px',
							}}
							aria-hidden="true"
						/>
					</button>
				</div>
			</div>
		);
	}
}

export default SearchInput;
