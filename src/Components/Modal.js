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
        this.node = doc.createElement('div');
        doc.body.appendChild(this.node);
    }
    static defaultProps = {
        isOpen: false
    };
    // toggleVisible(){
    //         const isOpen = this.state.isOpen;
    //         this.setState({isOpen: !isOpen});
    // }

    render(){
        // const props = {
        //     ...this.props,
        //     handleSubmit: this.handleSubmit,
        //     getField: this.getField,
        // };
        // this.setState({visiable: false, fields: {}});
        const props = this.props,
            { isOpen } = props;
        if(!isOpen)
            return null;
        else
            return createPortal(
                <Portal >
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