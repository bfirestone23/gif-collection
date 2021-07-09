import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionForm from "../../components/collection/CollectionForm";

class CollectionFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let collection = { name: this.state.name, user: this.props.user };
    this.props.addCollection(collection);
    this.setState({
      name: "",
    });
  };

  render() {
    return (
      <div>
        <CollectionForm
          collectionName={this.state.name}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.username,
  };
};

export default connect(mapStateToProps)(CollectionFormContainer);
