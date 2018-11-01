import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Random from './components/Random';
import Trending from './components/Trending';
import { Router } from '@reach/router';
import Header from './components/Header';

const Routes = () => (
  <Router>
    <Trending path="/" />
    <Random path="/random" />
  </Router>
);

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favourites: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Routes />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
