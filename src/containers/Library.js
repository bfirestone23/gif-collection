import React, { Component } from "react";
import CollectionsContainer from "./collection/CollectionsContainer";
import CollectionFormContainer from "./collection/CollectionFormContainer";
import CollectionContainer from "./collection/CollectionContainer";

export default class Library extends Component {
  renderCollectionContainers = () => {
    return this.props.collections.map((collection) => {
      return (
        <CollectionContainer
          key={collection.id}
          collection={collection}
          removeCollection={this.props.removeCollection}
          removeGif={this.props.removeGif}
        />
      );
    });
  };

  render() {
    return (
      <div className="Library">
        <CollectionFormContainer addCollection={this.props.addCollection} />
        <CollectionsContainer
          renderCollectionContainers={this.renderCollectionContainers}
          collections={this.props.collections}
          removeCollection={this.props.removeCollection}
          removeGif={this.props.removeGif}
        />
      </div>
    );
  }
}
