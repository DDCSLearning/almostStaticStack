import React, { Component } from 'react';
import Helmet from 'react-helmet';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Helmet title="almostStaticStack" />
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
        </div>
        <blockquote
          cite="https://medium.com/superhighfives/an-almost-static-stack-6df0a2791319#.mqz71luk6"
        ><p>
          I’m a big fan of create-react-app. It hugely simplifies starting a new React-based project, and it serves pretty well for any ES6 / ES2015 setup regardless of whether you use React. I originally built Sandpit with it, purely because I could get straight to coding, writing tests, and deploying to a static site host like Surge or Now.

          create-react-app’s best feature is its simplicity, but that that simplicity comes at a cost. As your application grows in complexity, you either have to yarn eject and take the entire set up into your own hands, or live with the limitations.
          </p>
        </blockquote>
      </div>
    );
  }
}

export default App;
