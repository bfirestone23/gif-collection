import React, { Component } from 'react';

class Gif extends Component {
    render() {
        return (
            <div className="gif">
                <div>
                    <a rel='noreferrer' target='_blank' href={this.props.url}>
                        <img className="rounded img-fluid" alt={this.props.title} src={this.props.src} />
                    </a>
                </div>
            </div>
        );
    }
}

export default Gif;