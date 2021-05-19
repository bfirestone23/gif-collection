import React, { Component } from 'react';

export default class Likes extends Component {

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return (
            <div>
                Likes: {this.props.likes}
                <button onClick={this.handleClick}>Like</button>
            </div>
        )
    }
}
