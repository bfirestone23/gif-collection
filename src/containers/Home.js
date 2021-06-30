import React, { Component } from "react";
import GifListContainer from "./GifListContainer";
import GifSearchContainer from "./GifSearchContainer";
import CollectionSelector from "../components/CollectionSelector";
import { Jumbotron } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron fluid className="rounded w-50 mx-auto my-2">
          <CollectionSelector
            collections={this.props.collections}
            selectCollection={this.props.selectCollection}
            activeCollection={this.props.activeCollection}
          />
          <GifSearchContainer />
        </Jumbotron>
        <GifListContainer
          activeCollection={this.props.activeCollection}
          addGif={this.props.addGif}
        />
      </div>
    );
  }
}
