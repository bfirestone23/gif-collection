import React, { Component } from "react";
import GifContainer from "../containers/GifContainer";
import { Spinner } from "react-bootstrap";

export default class CollectionPreview extends Component {
  renderCollectionPreview = () => {
    if (this.props.isLoading === true) {
      return <Spinner className="m-5" animation="border" variant="primary" />;
    } else {
      return this.props.collection.gifs.map((gif) => {
        return (
          <GifContainer
            collectionId={this.props.collection.id}
            collectionUser={this.props.collection.user.username}
            url={gif.url}
            title={gif.title}
            id={gif.id}
            key={gif.id}
            src={gif.preview}
            removeGif={this.props.removeGif}
          />
        );
      });
    }
  };

  render() {
    return (
      <div
        style={{
          width: "75%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="container-fluid"
      >
        {this.renderCollectionPreview()}
      </div>
    );
  }
}
