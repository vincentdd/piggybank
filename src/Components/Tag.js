import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

export default class Tag extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <li key={this.props.id}>
                {this.props.text}<span>edit</span>
            </li>
        )
    }
}

Tag.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
}