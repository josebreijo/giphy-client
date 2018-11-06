import React, { Component } from 'react';
import Gif from '../Gif';
import Spinner from '../Spinner';
import { getTrendingGifs } from '../../api';
import './Trending.css';

class Trending extends Component {
  state = {
    gifs: [],
    loading: true,
  };
  async componentDidMount() {
    let gifs = await getTrendingGifs();
    this.setState({ gifs: gifs.data, loading: false });
  }
  render() {
    const trendingGifs = this.state.gifs.map(gif => (
      <Gif
        key={gif.id}
        info={gif}
        onFavourite={this.props.onFavourite}
        favouriteIds={this.props.favouriteIds}
      />
    ));
    return (
      <div className="trending-section">
        {this.state.loading ? <Spinner /> : trendingGifs}
      </div>
    );
  }
}

export default Trending;
