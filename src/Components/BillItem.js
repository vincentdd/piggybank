import React from 'react';
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