import React from 'react';
import BillItem from "./BillItem";
import {connect} from 'react-redux';
import Modal from "./Modal";
import ItemForm from './ItemForm';
import "./billList.css"

const { Component } = React;
class List extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            selected: null
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal(obj) {
        console.log(obj);
        this.setState({
            modalIsOpen: true,
            selected: obj
        });
    }
    closeModal() {
        this.setState({modalIsOpen: false});
    }
    render(){
        const state = this.state,
            dom = this.props.bills.map((current) =>
                <BillItem key={current.id} bill={current} handleOpenModal={() => (this.openModal(current))} closeModal={this.closeModal} />
        );
        return (
            <React.Fragment>
                <ul className="bill-list">
                    {dom}
                </ul>
                <Modal isOpen={state.modalIsOpen} >
                    <ItemForm item={state.selected} />
                </Modal>
            </React.Fragment>
        )
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
    bills: filterSelect(state.bills, state.filter)
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(List);
