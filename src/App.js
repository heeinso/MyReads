import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

import BookList from './pages/BookList';
import Search from './pages/Search';
import NotFound from './components/NotFound';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={BookList} />
					<Route exact path="/search" component={Search} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
