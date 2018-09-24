import React from 'react';
import {createPortal} from 'react-dom';
import Portal from './Portal';
import PropTypes from 'prop-types';
//import ItemForm from 'ItemForm';
const { Component } = React;

function getParentElement(parentSelector) {
    return parentSelector();
}

//const Modal = WrappedComponent => class extends Component {
class Modal extends Component {
        constructor(props) {
        super(props);
        // this.toggleVisible = this.toggleVisible.bind(this);
    }
    static defaultProps = {
        isOpen: false,
        parentSelector: () => document.body
    };
    componentDidMount(){
        // debugger;
        // console.log(this.props.parentSelector());
        const parent = getParentElement(this.props.parentSelector);
        parent.appendChild(this.node);
    };
    // componentWillUnmount() {
    //     window.document.body.removeChild(this.node);
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
        // debugger;
        if(!this.node)
            this.node = document.createElement("div");
        if(!isOpen)
            return null;
        else
            return createPortal(
                <Portal isOpen={isOpen}>
                    {this.props.children}
                </Portal>,
                this.node
            );
    }
}

Modal.propTypes = {
    //toggleVisible: PropTypes.func
};

export default Modal;