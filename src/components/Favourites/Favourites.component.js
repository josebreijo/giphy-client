import React, { Component } from 'react';
import Gif from '../Gif';
import './Favourites.css';

class Favourites extends Component {
  render() {
    return (
      <div className="favourite-section">
        {this.props.favourites.map(gif => (
          <Gif
            key={gif.id}
            info={gif}
            onFavourite={this.props.onFavourite}
            favouriteIds={this.props.favouriteIds}
          />
        ))}
      </div>
    );
  }
}

export default Favourites;
