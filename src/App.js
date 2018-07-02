import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { combineReducers, createStore } from 'redux';
import BillList from './Components/BillList';
import InputItem from './Components/InputItem';
import store from './Reducer/reducer';

class App extends Component {
<<<<<<< HEAD
    showDay(bills) {
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
    filterSelect(bills, filter){
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
        return this.showDay(bills);
    };
=======
>>>>>>> 11d285f6c2c2cbfbf6e7b217e901b13bbb824d1f
    render() {
        // const {bills, filter} = this.props;
        // const filtered = this.filterSelect(bills, filter);
        return (
            <div className="App" >
                 <InputItem onAddClick ></InputItem>
<<<<<<< HEAD
                 <BillList bills = {this.props.bills}>
=======
                 <BillList>
>>>>>>> 11d285f6c2c2cbfbf6e7b217e901b13bbb824d1f
                 </BillList>
            </div>
        );
    }
}

export default App;