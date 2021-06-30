import React, { Component } from "react";
import { FormControl, FormGroup, Form, Alert, Spinner } from "react-bootstrap";
import { connect } from "react-redux";

class CollectionSelector extends Component {
  renderSelector = () => {
    if (
      this.props.collections.filter(
        (c) => c.user.username === this.props.currentUser
      ).length > 0 &&
      this.props.isLoading === false
    ) {
      return (
        <FormControl
          ref={(input) => (this.collectionSelector = input)}
          id="collection-select"
          className="m-auto w-25"
          as="select"
          value={this.props.activeCollection.name}
          onChange={this.props.selectCollection}
        >
          <option value="none" disabled />
          {this.renderCollectionOptions()}
        </FormControl>
      );
    } else if (this.props.isLoading === true) {
      return (
        <div>
          <Spinner className="m-auto" animation="border" variant="primary" />
        </div>
      );
    } else {
      return (
        <Alert className="w-25 m-auto d-flexbox" variant="danger">
          No collections available.
        </Alert>
      );
    }
  };

  renderCollectionOptions = () => {
    let currentUserCollections = this.props.collections.filter(
      (c) => c.user.username === this.props.currentUser
    );
    return currentUserCollections.map((collection) => (
      <option id={collection.id} key={collection.id}>
        {collection.name}
      </option>
    ));
  };

  render() {
    return (
      <div>
        <form>
          <FormGroup>
            <Form.Label>Select a Collection:</Form.Label>
            {this.renderSelector()}
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeCollection: state.collection.activeCollection,
    isLoading: state.collection.isLoading,
    currentUser: state.user.username,
  };
};

export default connect(mapStateToProps)(CollectionSelector);
