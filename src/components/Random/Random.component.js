import React, { Component } from 'react';
import { getRandomGif } from '../../api';
import './Random.css';

import Gif from '../Gif';
import Spinner from '../Spinner';
import Button from '../Button';

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
        <Button onClick={this.refreshGif} disabled={!randomGifData}>
          show me another one
        </Button>
        {randomGifData ? (
          <Gif
            info={randomGifData.data}
            onFavourite={this.props.onFavourite}
            favouriteIds={this.props.favouriteIds}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Random;
