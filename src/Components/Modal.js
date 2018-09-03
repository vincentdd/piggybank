import React from 'react';
import {createPortal} from 'react-dom';
import PropTypes from 'prop-types';
//import ItemForm from 'ItemForm';
const { Component } = React;


//const Modal = WrappedComponent => class extends Component {
class Modal extends Component {
        constructor() {
        super(...arguments);
        // this.toggleVisible = this.toggleVisible.bind(this);
        const doc = window.document;
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
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

    // toggleVisible = () => {
    //     const visiableNow = this.state.visiable;
    //     this.setState({visiable: !visiableNow});
    // }

    render(){
        // const props = {
        //     ...this.props,
        //     handleSubmit: this.handleSubmit,
        //     getField: this.getField,
        // };
        // this.setState({visiable: false, fields: {}});

        return createPortal(
            <div className="dialog">
                {this.props.children}
            </div>,
            this.node
        );
    }

    componentWillUnmount() {
        window.document.body.removeChild(this.node);
    }

}

Modal.propTypes = {
    //toggleVisible: PropTypes.func
};

export default Modal;