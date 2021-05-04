import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addCollection, removeCollection } from '../actions/collections';

class Library extends Component {
    render() {
        console.log(this.props.collections)
        return (
            <div>
                this is my library
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { collections: state.collections }
}

export default connect(mapStateToProps, { addCollection, removeCollection })(Library);