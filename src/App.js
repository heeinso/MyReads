import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/App.css';

import BookList from './pages/BookList';
import Search from './pages/Search';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={BookList} />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    );
  }
}

export default App;
