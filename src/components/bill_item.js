import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import './bill_item.css';
import imgUrl from "../img/edit.png";

export default class BillItem extends Component {
    constructor() {
        super();
    }
    render(){
        const props = this.props;
        return (
            <li className={"list-item"}>
                {props.bill.text}
                {props.bill.price}
                <a href="javascript:void(0)" bill={props.bill} onClick={props.handleOpenModal}><span><img
                    src={imgUrl} alt="edit" className={"list-icon"}/></span></a>
            </li>
        )
    }
}

BillItem.propTypes = {
    bill: PropTypes.object
};