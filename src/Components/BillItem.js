import React from 'react';
import PropTypes from 'prop-types';
const { Component } = React;

export default class BillItem extends Component {
    constructor() {
        super();
    }
    render(){
        const props = this.props;
        return (
            <li>
                {props.bill.text}
                {props.bill.price}
                <a href="javascript:void(0)" bill={props.bill} onClick={props.handleOpenModal}>edit</a>
            </li>
        )
    }
}

BillItem.propTypes = {
    bill: PropTypes.object
};