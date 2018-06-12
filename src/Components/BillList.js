import React from 'react';
import BillItem from "./BillItem";
const { Component } = React;

export default class BillList extends Component {
    constructor() {
        super();
    }
    render(){
        console.log(this.props.bills);
        const dom = this.props.bills.map(current => <BillItem bill = {current} key = {current.id}></BillItem>)
        return (<div>
            {dom}
        </div>)
    }
}