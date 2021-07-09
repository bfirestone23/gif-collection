import "./App.css";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./containers/Home";
import Library from "./containers/Library";
import LoginContainer from "./containers/user/LoginContainer";
import { Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import {
  selectCollection,
  addCollection,
  removeCollection,
  getCollections,
} from "./actions/collections";
import { addGif, removeGif } from "./actions/collections";
import { setStatus, logout } from "./actions/users";

class App extends Component {
  componentDidMount() {
    this.props.getCollections();
    this.props.setStatus();
  }

  handleLogin = () => {
    if (this.props.status === "idle") {
      return (
        <div>
          <Redirect to="/login" />
          <Route path="/login">
            <LoginContainer />
          </Route>
        </div>
      );
    }
    if (
      this.props.status === "resolved" &&
      this.props.history.location.pathname === "/login"
    ) {
      return <Redirect to="/home" />;
    }
    if (this.props.status === "resolved") {
      return (
        <div>
          <NavBar />
          <Route exact path="/home">
            <div className="mb-5">
              <h4 style={{ color: "white" }}>
                Welcome, {this.props.username}!
              </h4>
              <Button size="sm" onClick={this.props.logout}>
                Log Out
              </Button>
            </div>
            <Home
              addGif={this.props.addGif}
              activeCollection={this.props.activeCollection}
              selectCollection={this.props.selectCollection}
              collections={this.props.collections}
            />
          </Route>
          <Route path="/collections">
            <Library
              collections={this.props.collections}
              getCollections={this.props.getCollections}
              addCollection={this.props.addCollection}
              removeCollection={this.props.removeCollection}
              removeGif={this.props.removeGif}
            />
          </Route>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="App m-auto p-1">
        <Switch>{this.handleLogin()}</Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collections: state.collection.collections,
    activeCollection: state.collection.activeCollection,
    status: state.user.status,
    username: state.user.username,
  };
};

export default withRouter(
  connect(mapStateToProps, {
    setStatus,
    logout,
    selectCollection,
    addCollection,
    removeCollection,
    getCollections,
    addGif,
    removeGif,
  })(App)
);
