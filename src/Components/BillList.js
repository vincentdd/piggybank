import React from 'react';
import BillItem from "./BillItem";
const { Component } = React;

export default class BillList extends Component {
    constructor() {
        super();
    }
    render(){
        const dom = this.props.billList.map(current => <BillItem bill = {current}></BillItem>)
        return (<div>
            {dom}
        </div>)
    }
}