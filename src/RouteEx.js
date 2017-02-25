import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class RouteEx extends Component {
  render() {
    return (
      <div>
        <h1><Link to="/"> Now we are on a Route! 🚀 Go back home </Link></h1>
      </div>
    );
  }
}
