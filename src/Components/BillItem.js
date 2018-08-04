import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

export default class BillItem extends Component {
    constructor() {
        super();
    }
    render(){
        return (
            <div>
                {this.props.bill.text}
                {this.props.bill.price}
            </div>
        )
    }
}

BillItem.propTypes = {
    bill: PropTypes.object
}