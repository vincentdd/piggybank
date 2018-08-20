import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

const Tag = (props) => (
    <li key={props.id}>
        {props.text}<a href="javascript:void(0);" >edit</a>
    </li>
);
Tag.propTypes = {
    id: PropTypes.number,
    text: PropTypes.string
};
export default Tag;