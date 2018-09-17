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
            <div>
                {props.bill.text}
                {props.bill.price}
                <a href="javascript:void(0)" onClick={props.openModal()}>edit</a>
            </div>
        )
    }
}

BillItem.propTypes = {
    bill: PropTypes.object
};