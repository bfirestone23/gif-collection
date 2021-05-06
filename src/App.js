import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import Library from './containers/Library';

import { connect } from 'react-redux';
import { selectCollection, addCollection, removeCollection, getCollections } from './actions/collections';
import { addGif, removeGif } from './actions/gifs';

class App extends Component {

  componentDidMount() {
    this.props.getCollections();
  }

  render() {
    return (
      <Router>
        <div className="App m-auto p-1">
          <NavBar />
          <h1>GifCollection</h1>
          <hr />
          <Route exact path="/">
            <Home 
              addGif={this.props.addGif} 
              activeCollection={this.props.activeCollection} 
              selectCollection={this.props.selectCollection} 
              collections={this.props.collections}
            />
          </Route>
          <Route exact path="/library">
            <Library 
              collections={this.props.collections} 
              addCollection={this.props.addCollection} 
              removeCollection={this.props.removeCollection} 
              removeGif={this.props.removeGif} 
            />
          </Route>
        </div>
      </Router>
      
    );
  }
  
}

const mapStateToProps = state => {
  return { 
    collections: state.collections,
    activeCollection: state.activeCollection 
  }
}


export default connect(mapStateToProps, { selectCollection, addCollection, removeCollection, getCollections, addGif, removeGif })(App);
