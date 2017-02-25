import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import RouteEx from './RouteEx';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/route" component={RouteEx} />
        </div>
      </Router>
    );
  }
}

export default App;
