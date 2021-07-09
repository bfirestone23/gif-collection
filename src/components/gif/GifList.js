import React, { Component } from "react";
import GifContainer from "../../containers/gif/GifContainer";
import { Spinner } from "react-bootstrap";

export default class GifList extends Component {
  renderGifContainers = () => {
    if (this.props.isLoading) {
      return <Spinner className="m-5" animation="border" variant="primary" />;
    } else {
      return this.props.gifs.map((gif) => {
        return (
          <GifContainer
            activeCollection={this.props.activeCollection}
            addGif={this.props.addGif}
            url={gif.url}
            title={gif.title}
            id={gif.id}
            key={gif.id}
            src={gif.images.fixed_width_downsampled.url}
            preview={gif.images.fixed_width_small.url}
          />
        );
      });
    }
  };

  render() {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap" }}
        className="justify-content-center align-items-center m-auto"
      >
        {this.renderGifContainers()}
      </div>
    );
  }
}
