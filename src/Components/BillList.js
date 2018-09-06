import React from 'react';
import BillItem from "./BillItem";
import {connect} from 'react-redux';
import Modal from './Modal'

const { Component } = React;
class List extends Component {
    constructor() {
        super();
    }
    render(){
        console.log(this.props.bills);
        const dom = this.props.bills.map(current => <BillItem bill = {current} key = {current.id} />);
        return (<div>
            {dom}
            <Modal />
        </div>)
    }
}

function showDay(bills) {
    let result = [],
        ITEM_ID = 0,
        temp = {};
    if(!Date.prototype.__filterTime)
        return bills;
    bills.map((current, index, array) => {
        const dayOfBefore = new Date(current.date).__filterTime(),
            dayOfAfter = new Date(array[index + 1].date).__filterTime();
        if(dayOfBefore === dayOfAfter){
            temp.price += current.price;
            temp.text = current.date;
            temp.date = current.date;
        }else{
            [...result, temp];
            temp = {
                id: ITEM_ID++,
                price: 0,
                tagId: 'NONE'
            };
        }
    });
    return result;
}

function filterSelect(bills, filter){
    switch (filter){
        case 'DAY':
            Date.prototype.__filterTime = new Date().getDate;
            break;
        case 'WEEK':
            Date.prototype.__filterTime = new Date().getDay;
            break;
        case 'MONTH':
            Date.prototype.__filterTime = new Date().getMonth;
            break;
        case 'YEAR':
            Date.prototype.__filterTime = new Date().getFullYear;
            break;
        default:
            Date.prototype.__filterTime = undefined;
            break;
    }
    return showDay(bills);
}

const mapStateToProps = (state) => ({
    bills:filterSelect(state.bills, state.filter)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(List);
