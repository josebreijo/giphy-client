import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Random from './components/Random';
import Trending from './components/Trending';
import { Router } from '@reach/router';
import Header from './components/Header';

const Routes = ({ onFavourite, favouriteIds }) => (
  <Router>
    <Trending path="/" onFavourite={onFavourite} favouriteIds={favouriteIds} />
    <Random
      path="/random"
      onFavourite={onFavourite}
      favouriteIds={favouriteIds}
    />
  </Router>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      favouriteObjects: [],
      favouriteIds: [],
    };
  }

  onFavourite = gif => {
    let favouriteIds = this.state.favouriteIds;
    let favouriteObjects = this.state.favouriteObjects;
    let index = favouriteIds.indexOf(gif.id);
    if (index === -1) {
      favouriteIds.push(gif.id);
      favouriteObjects.push(gif);
    } else {
      favouriteIds.splice(index, 1);
      favouriteObjects.splice(index, 1);
    }
    this.setState({ favouriteIds, favouriteObjects });
  };

  render() {
    return (
      <div>
        <Header />
        <Routes
          onFavourite={this.onFavourite}
          favouriteIds={this.state.favouriteIds}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
