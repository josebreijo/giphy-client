import React, { Component } from 'react';
import { getRandomGif } from '../../api';
import './App.css';

import Gif from '../Gif';
import Spinner from '../Spinner';

class App extends Component {
  state = {
    randomGifData: null,
  };

  componentDidMount() {
    this.refreshGif();
  }

  refreshGif = async () => {
    this.setState({ randomGifData: null });
    const gifData = await getRandomGif();
    this.setState({ randomGifData: gifData });
  };

  render() {
    const { randomGifData } = this.state;
    return (
      <div className="App">
        <h1 className="App-header">best client ever</h1>
        <button
          className="App-button"
          onClick={this.refreshGif}
          disabled={!randomGifData}
        >
          show me another one
        </button>
        {randomGifData ? <Gif info={randomGifData} /> : <Spinner />}
      </div>
    );
  }
}

export default App;
