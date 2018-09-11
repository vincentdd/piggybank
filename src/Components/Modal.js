import React from 'react';
import {createPortal} from 'react-dom';
import Portal from './Portal';
import PropTypes from 'prop-types';
//import ItemForm from 'ItemForm';
const { Component } = React;


//const Modal = WrappedComponent => class extends Component {
class Modal extends Component {
        constructor(props) {
        super(props);
        // this.toggleVisible = this.toggleVisible.bind(this);
        const doc = window.document;
        this.state = {isOpen: false};
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
    }

    toggleVisible(){
            const isOpen = this.state.isOpen;
            this.setState({isOpen: !isOpen});
    }

    render(){
        // const props = {
        //     ...this.props,
        //     handleSubmit: this.handleSubmit,
        //     getField: this.getField,
        // };
        // this.setState({visiable: false, fields: {}});

        const state = this.state,
            { isOpen } = state;
        return createPortal(
            <Portal isOpen={isOpen} >
                {this.props.children}
            </Portal>,
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