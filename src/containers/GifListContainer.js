import React, { Component } from "react";
import GifList from "../components/GifList";
import Paginate from "../components/Paginate";
import { connect } from "react-redux";

class GifListContainer extends Component {
  indexOfLastItem = () => {
    return this.props.currentPage * this.props.itemsPerPage;
  };

  indexOfFirstItem = () => {
    return this.indexOfLastItem() - this.props.itemsPerPage;
  };

  currentItems = () => {
    return this.props.gifs.slice(
      this.indexOfFirstItem(),
      this.indexOfLastItem()
    );
  };

  handleClick = (gifData) => {
    this.props.addGif(gifData);
  };

  render() {
    return (
      <div>
        <Paginate />
        <GifList
          activeCollection={this.props.activeCollection}
          addGif={this.handleClick}
          gifs={this.currentItems()}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.gifSearch.isLoading,
    currentPage: state.gifSearch.currentPage,
    itemsPerPage: state.gifSearch.itemsPerPage,
    gifs: state.gifSearch.searchResults,
  };
};

export default connect(mapStateToProps)(GifListContainer);
