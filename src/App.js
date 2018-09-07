import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import BookList from './pages/BookList';
import Search from './pages/Search';
import PageNotFound from './components/PageNotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={BookList} />
					<Route exact path="/search" component={Search} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
