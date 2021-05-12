import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCurrentPage } from '../actions/gifs';

class Paginate extends Component {
    pageNumbers = () => {
        let pages = []
        for (let i = 1; i <= Math.ceil(this.props.totalItems / this.props.itemsPerPage); i++) {
            pages.push(i);
        }
        return pages;
    }

    renderPageNumbers = () => {
        return this.pageNumbers().map(number => {
            let classes = 'page-item'
            if (number === this.props.currentPage) {
                classes += ' active'
            }

            return (<li key={number} onClick={(e) => {this.props.updateCurrentPage(number); e.preventDefault()}} className={classes}>
                        <button className='page-link'>{number}</button>
                    </li>)
        })

    }

    render() {
        return (
            <nav>
                <ul className='pagination pagination-sm justify-content-end border-0 m-2'>
                    {this.renderPageNumbers()}
                </ul>
            </nav>
        );
    }
}


const mapStateToProps = state => {
    return {
        currentPage: state.gifSearch.currentPage,
        itemsPerPage: state.gifSearch.itemsPerPage,
        totalItems: state.gifSearch.searchResults.length
    }
}

export default connect(mapStateToProps, { updateCurrentPage })(Paginate);

