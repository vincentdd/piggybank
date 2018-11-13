import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './billItem.css'

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
                <a href="javascript:void(0)" bill={props.bill} onClick={props.handleOpenModal}><icon src="../img/edit.png" /></a>
            </li>
        )
    }
}

BillItem.propTypes = {
    bill: PropTypes.object
};