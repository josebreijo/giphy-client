import React, { Component } from 'react';
import { getRandomGif } from '../../api';
import './Random.css';

import Gif from '../Gif';
import Spinner from '../Spinner';

class Random extends Component {
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
      <div className="Random">
        <button
          className="Random-button"
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

export default Random;
