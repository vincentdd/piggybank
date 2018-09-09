import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from "react-redux";
import Modal from './Modal';
const { Component } = React;

class ItemForm extends Component{
    constructor(){
        super()
        this.onChange = this.onChange.bind(this);
        this.getField = this.getField.bind(this);
    }
    onChange = key => e => {
        this.setState({
            fields: {
                ...this.state.fields,
                [key]: e.target.value,
            }
        })
    };

    getField = fieldName => {
        return {
            onChange: this.onChange(fieldName),
        }
    };
    render() {
        return (
            <form>
                <div>
                    <label id="tagName">
                        标签名：
                    </label>
                    <input name="tagName" {...this.getField('tagName')}/>
                </div>
                <input type="submit" onSubmit={this.handleSubmit}></input>
            </form>
        )
    }
}

ItemForm.propTypes = {
    getField: PropTypes.func,
    handleSubmit: PropTypes.func
};

class BillEdit extends Component {
    constructor(){
        super()
    }
    render(){
        return <Modal>
            <ItemForm />
        </Modal>
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleSubmit: (payload) => {
        console.log('submit text')
        dispatch({
            type: 'ADD_ITEM',
            ...payload
        })
    }
});

export default BillEdit;